/**
 * External dependencies
 */
import type { TemplateArray } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './style.scss';

export const Edit = (): JSX.Element => {
	const blockProps = useBlockProps( {
		className: 'smntcs-converter-block',
	} );

	const defaultTemplate = [
		[ 'smntcs/speed-form', {}, [] ],
		[
			'smntcs/output-block',
			{
				content: __( '0 m/s = 0 km/h', 'smntcs-converter-block' ),
				id: 'speed-output',
			},
			[],
		],
	] as TemplateArray;

	return (
		<div { ...blockProps }>
			<InnerBlocks template={ defaultTemplate } templateLock="all" />
		</div>
	);
};

export const Save = (): JSX.Element => {
	return (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	);
};
