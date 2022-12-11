<?php
/**
 * Plugin Name:       SMNTCS Converter Block
 * Description:       A  collection of various converter blocks.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            nielslange
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       smntcs-converter-block
 *
 * @package           smntcs
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function smntcs_smntcs_converter_block_block_init() {
	register_block_type( __DIR__ . '/build/temperature' );
}
add_action( 'init', 'smntcs_smntcs_converter_block_block_init' );
