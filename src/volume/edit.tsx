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
						<label htmlFor="volume-input">{ __( 'Input', 'smntcs-converter-block' ) }</label>
						<input type="number" id="volume-input" placeholder="0" />
					</div>
					<div>
						<label htmlFor="volume-from">{ __( 'From', 'smntcs-converter-block' ) }</label>
						<select id="volume-from">
							<option value="mm³">Cubic Millimeters (mm³)</option>
							<option value="cm³">Cubic Centimeters (cm³)</option>
							<option value="dm³">Cubic Decimeters (dm³)</option>
							<option value="m³">Cubic Meters (m³)</option>
							<option value="km³">Cubic Kilometers (km³)</option>
							<option value="cl">Centilitres (cl)</option>
							<option value="ml">Milliliters (ml)</option>
							<option value="dl">Deciliters (dl)</option>
							<option value="l">Liters (l)</option>
							<option value="kl">Kiloliters (kl)</option>
							<option value="hl">Hectoliters (hl)</option>
						</select>
					</div>
					<div>
						<label htmlFor="volume-to">{ __( 'To', 'smntcs-converter-block' ) }</label>
						<select id="volume-to">
							<option value="mm³">Cubic Millimeters (mm³)</option>
							<option value="cm³" selected>
								Cubic Centimeters (cm³)
							</option>
							<option value="dm³">Cubic Decimeters (dm³)</option>
							<option value="m³">Cubic Meters (m³)</option>
							<option value="km³">Cubic Kilometers (km³)</option>
							<option value="cl">Centilitres (cl)</option>
							<option value="ml">Milliliters (ml)</option>
							<option value="dl">Deciliters (dl)</option>
							<option value="l">Liters (l)</option>
							<option value="kl">Kiloliters (kl)</option>
							<option value="hl">Hectoliters (hl)</option>
						</select>
					</div>
				</form>
				<div className="result" id="volume-output">
					0 mm³ = 0 dm³
				</div>
			</Disabled>
		</div>
	);
}
