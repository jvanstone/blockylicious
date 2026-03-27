<?php
// This file is generated. Do not modify it manually.
return array(
	'clickyButton' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/clicky-button',
		'version' => '0.1.0',
		'title' => 'Clicky Button',
		'category' => 'blockylicious',
		'icon' => 'smiley',
		'description' => 'A call to action button that links to a particular post or page, rather than hard codding the destination URL.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'text' => true,
				'link' => false,
				'gradients' => true,
				'enableContrastChecker' => true
			),
			'spacing' => array(
				'padding' => true
			)
		),
		'attributes' => array(
			'postType' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkPost' => array(
				'type' => 'number'
			),
			'labelText' => array(
				'type' => 'string',
				'default' => ''
			),
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'background' => '#000000',
						'text' => '#ffffff'
					),
					'spacing' => array(
						'padding' => array(
							'top' => '15px',
							'bottom' => '15px',
							'right' => '15px',
							'left' => '15px'
						)
					)
				)
			)
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'parent' => 'blockylicious/clicky-group'
	),
	'clickyGroup' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/clicky-group',
		'version' => '0.1.0',
		'title' => 'Clicky Group',
		'category' => 'blockylicious',
		'icon' => 'smiley',
		'description' => 'A group clicky buttons that link to a particular post or page, rather than hard codding the destination URL.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'blockGap' => true
			)
		),
		'attributes' => array(
			'justifyContent' => array(
				'type' => 'string',
				'enum' => array(
					'left',
					'center',
					'right'
				),
				'default' => 'left'
			)
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'curvy' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/curvy',
		'version' => '0.1.0',
		'title' => 'Curvy',
		'category' => 'blockylicious',
		'icon' => 'smiley',
		'description' => 'Curvy Shape divider to make dividing content more fun.',
		'example' => array(
			'innerBlocks' => array(
				array(
					'name' => 'core/heading',
					'attributes' => array(
						'content' => 'Curvy block'
					)
				),
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'content' => 'This is an example Curvy block.'
					)
				)
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'link' => true,
				'text' => true
			),
			'spacing' => array(
				'padding' => true
			)
		),
		'variations' => array(
			array(
				'name' => 'top-only',
				'title' => 'Curvy - Top Only',
				'attributes' => array(
					'enableBottomCurve' => false,
					'enableTopCurve' => true
				)
			),
			array(
				'name' => 'bottom-only',
				'title' => 'Curvy - Bottom Only',
				'attributes' => array(
					'enableBottomCurve' => true,
					'enableTopCurve' => false
				)
			)
		),
		'attributes' => array(
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'background' => '#ec4899'
					),
					'spacing' => array(
						'padding' => array(
							'top' => '80px',
							'bottom' => '80px',
							'right' => '50px',
							'left' => '50px'
						)
					)
				)
			),
			'enableTopCurve' => array(
				'type' => 'boolean',
				'default' => true
			),
			'topWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'topHeight' => array(
				'type' => 'number',
				'default' => 100
			),
			'topFlipX' => array(
				'type' => 'boolean',
				'default' => false
			),
			'topFlipY' => array(
				'type' => 'boolean',
				'default' => false
			),
			'topColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'enableBottomCurve' => array(
				'type' => 'boolean',
				'default' => true
			),
			'bottomWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'bottomHeight' => array(
				'type' => 'number',
				'default' => 100
			),
			'bottomFlipX' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottomFlipY' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottomColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			)
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	)
);
