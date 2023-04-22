/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Save( props: any ): JSX.Element {
	const { attributes } = props;
	const { content = '', id = '' } = attributes;

	return (
		<div { ...useBlockProps.save( { className: 'smntcs-converter-block' } ) }>
			<div className="result" id={ id }>
				{ content }
			</div>
		</div>
	);
}
