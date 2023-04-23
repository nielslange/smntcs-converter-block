/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Save() {
	return (
		<div { ...useBlockProps.save( { className: 'smntcs-converter-block' } ) }>
			<form>
				<div>
					<label htmlFor="temperature-input">{ __( 'Input', 'smntcs-converter-block' ) }</label>
					<input type="number" id="temperature-input" placeholder="0" />
				</div>
				<div>
					<label htmlFor="temperature-from">{ __( 'From', 'smntcs-converter-block' ) }</label>
					<select id="temperature-from">
						<option value="°C">Celsius (°C)</option>
						<option value="°F">Fahrenheit (°F)</option>
						<option value="°K">Kelvin (°K)</option>
						<option value="°R">Rankine (°R)</option>
					</select>
				</div>
				<div>
					<label htmlFor="temperature-to">{ __( 'To', 'smntcs-converter-block' ) }</label>
					<select id="temperature-to">
						<option value="°C">Celsius (°C)</option>
						<option value="°F" selected>
							Fahrenheit (°F)
						</option>
						<option value="°K">Kelvin (°K)</option>
						<option value="°R">Rankine (°R)</option>
					</select>
				</div>
			</form>
		</div>
	);
}
