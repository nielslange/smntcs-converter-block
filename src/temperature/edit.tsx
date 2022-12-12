/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Disabled } from '@wordpress/components';

/**
 * Internal dependencies
 */
import '../style.scss';

export default function Block() {
	return (
		<div { ...useBlockProps( { className: 'smntcs-converter-block' } ) }>
			<Disabled>
				<form>
					<div>
						<label htmlFor="temperature-input">{ __( 'Input', 'smntcs-converter-block' ) }</label>
						<input type="number" id="temperature-input" placeholder="0" />
					</div>
					<div>
						<label htmlFor="temperature-from">{ __( 'From', 'smntcs-converter-block' ) }</label>
						<select id="temperature-from">
							<option value="°C">Celsius</option>
							<option value="°F">Fahrenheit</option>
							<option value="°K">Kelvin</option>
							<option value="°R">Rankine</option>
						</select>
					</div>
					<div>
						<label htmlFor="temperature-to">{ __( 'To', 'smntcs-converter-block' ) }</label>
						<select id="temperature-to">
							<option value="°C">Celsius</option>
							<option value="°F" selected>
								Fahrenheit
							</option>
							<option value="°K">Kelvin</option>
							<option value="°R">Rankine</option>
						</select>
					</div>
				</form>
				<div className="result" id="temperature-output">
					0 °C = 32 °F
				</div>
			</Disabled>
		</div>
	);
}
