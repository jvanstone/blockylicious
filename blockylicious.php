<?php
/**
 * Plugin Name:       Blockylicious
 * Description:       A plugin of a funky blocks based off of WebDevEducation
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Jason Vanstone
 * Author URI:        https://jasonvanstone.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blockylicious
 *
 * @package CreateBlock
 */

namespace VjBlocks;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Silence is golden.' );
}

final class Blockylicious {
	static function init() {

		add_action( 'enqueue_block_assets', function () {
			wp_enqueue_style( "dashicons" );
		});

		add_action( 'enqueue_block_assets', function () {
			$style_url = plugins_url( "build/style-index.css", __FILE__ );

			wp_enqueue_style( 'blockylicious-style', $style_url, array() );
		} );
		add_action('init', function(){
			add_filter( 'block_categories_all', [self::class, 'create_custom_block_category'] );
			wp_register_block_types_from_metadata_collection( __DIR__ . '/build/blocks/', __DIR__ . '/build/blocks-manifest.php' );
	/* 		register_block_type( __DIR__ . '/build/blocks/clickyGroup' );
			register_block_type( __DIR__ . '/build/blocks/clickyButton' );
			register_block_type( __DIR__ . '/build/blocks/piccyGallery' );
			register_block_type( __DIR__ . '/build/blocks/piccyImage' );
			register_block_type( __DIR__ . '/build/blocks/curvy' ); */

			register_block_pattern_category( 'blockylicious', array( 'label' => array( __('Blockylicious', 'blockylicious' )) ) );

			register_block_pattern( 'blockylicious/call-to-action', array(
				'categories' => array( 'call-to-action', 'blockylicious' ),
				'title' => __('Blockylicious CTA', 'blockylicious'),
				'description' => __('A heading, paragraph and clicky button block', 'blockylicious'),
				'content' =>'<!-- wp:heading {"textAlign":"center"} -->
					<h2 class="wp-block-heading has-text-align-center">Lorem Ipsum</h2>
					<!-- /wp:heading -->

					<!-- wp:paragraph {"align":"center"} -->
					<p class="has-text-align-center">Some paragraph text</p>
					<!-- /wp:paragraph -->

					<!-- wp:blockylicious/clicky-group {"justifyContent":"center"} -->
					<!-- wp:blockylicious/clicky-button {"labelText":"Call to action","style":{"color":{"text":"#ffffff"},"spacing":{"padding":{"top":"var:preset|spacing|20","bottom":"var:preset|spacing|20","right":"10px","left":"10px"}}},"backgroundColor":"accent-3"} -->
					<div>Clicky Button</div>
					<!-- /wp:blockylicious/clicky-button -->
					<!-- /wp:blockylicious/clicky-group -->

					<!-- wp:paragraph -->
					<p></p>
					<!-- /wp:paragraph -->' 
			));

		
			});

			add_action('enqueue_block_editor_assets', function() {
				$script_url = plugins_url("build/index.js", __FILE__);
				wp_enqueue_script(
					'blockylicious-index',
					$script_url,
					array('wp-blocks', 'wp-element', 'wp-editor'),
					null,
					true
				);

				$style_url = plugins_url("build/style-index.css", __FILE__);

				wp_enqueue_style( 'blockylicious-style', $style_url, array() );
			});
	}

	public static function convert_custom_properties($value)
	{
		$prefix     = 'var:';
		$prefix_len = strlen($prefix);
		$token_in   = '|';
		$token_out  = '--';
		if (str_starts_with($value, $prefix)) {
			$unwrapped_name = str_replace(
				$token_in,
				$token_out,
				substr($value, $prefix_len)
			);
			$value = "var(--wp--$unwrapped_name)";
		}

		return $value;
	}

	public static function create_custom_block_category($categories) {

		array_unshift( $categories, [
			'slug' => 'blockylicious',
			'title' => 'Blockylicious'
		] );

		return $categories;
	}
}

Blockylicious::init();
