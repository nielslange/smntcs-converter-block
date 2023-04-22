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
					<label htmlFor="area-input">{ __( 'Input', 'smntcs-converter-block' ) }</label>
					<input type="number" id="area-input" placeholder="0" />
				</div>
				<div>
					<label htmlFor="area-from">{ __( 'From', 'smntcs-converter-block' ) }</label>
					<select id="area-from">
						<option value="mm²">Square Millimeters (mm²)</option>
						<option value="cm²">Square Centimeters (cm²)</option>
						<option value="dm²">Square Decimeters (dm²)</option>
						<option value="m²">Square Meters (m²)</option>
						<option value="km²">Square Kilometers (km²)</option>
						<option value="in²">Square Inches (in²)</option>
						<option value="ft²">Square Feet (ft²)</option>
						<option value="yd²">Square Yards (yd²)</option>
						<option value="mi²">Square Miles (mi²)</option>
						<option value="ha">Hectares (ha)</option>
						<option value="ac">Acres (ac)</option>
					</select>
				</div>
				<div>
					<label htmlFor="area-to">{ __( 'To', 'smntcs-converter-block' ) }</label>
					<select id="area-to">
						<option value="mm²">Square Millimeters (mm²)</option>
						<option value="cm²">Square Centimeters (cm²)</option>
						<option value="dm²">Square Decimeters (dm²)</option>
						<option value="m²">Square Meters (m²)</option>
						<option value="km²">Square Kilometers (km²)</option>
						<option value="in²">Square Inches (in²)</option>
						<option value="ft²">Square Feet (ft²)</option>
						<option value="yd²">Square Yards (yd²)</option>
						<option value="mi²">Square Miles (mi²)</option>
						<option value="ha">Hectares (ha)</option>
						<option value="ac">Acres (ac)</option>
					</select>
				</div>
			</form>
		</div>
	);
}
