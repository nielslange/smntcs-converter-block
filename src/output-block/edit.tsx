/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './style.scss';

export default function Block( props: any ): JSX.Element {
	const { attributes } = props;
	const { content = '', id = '' } = attributes;

	return (
		<div { ...useBlockProps( { className: 'smntcs-converter-block' } ) }>
			<div className="result" id={ id }>
				{ content }
			</div>
		</div>
	);
}
