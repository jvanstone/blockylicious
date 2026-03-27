<?php

use VjBlocks\Blockylicious;

$block_gap = Blockylicious::convert_custom_properties($attributes['style']['spacing']['blockGap'] ?? 0);
//wp_send_json( $block_gap );
$block_justify_content = $attributes['justifyContent'];
$block_wrapper_attributes = get_block_wrapper_attributes(['style'=> "gap: $block_gap; justify-content: $block_justify_content"]);

?>
<div <?php echo $block_wrapper_attributes ?>>
	<?php echo $content; ?>
</div>
