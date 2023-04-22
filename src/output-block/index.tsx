import { registerBlockType } from '@wordpress/blocks';
import type { BlockConfiguration } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

const blockConfig: BlockConfiguration = {
	...metadata,
	edit: Edit,
	save: Save,
};

registerBlockType( metadata.name, blockConfig );
