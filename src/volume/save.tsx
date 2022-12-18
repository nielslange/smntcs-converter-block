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
						{ /* <option value="in³">Cubic Inches (in³)</option>
						<option value="ft³">Cubic Feet (ft³)</option>
						<option value="yd³">Cubic Yards (yd³)</option>
						<option value="mi³">Cubic Miles (mi³)</option>
						<option value="tsp">Teaspoons (tsp)</option>
						<option value="tbsp">Tablespoons (tbsp)</option>
						<option value="fl oz">Fluid Ounces (fl oz)</option>
						<option value="cup">Cups (cup)</option>
						<option value="pint">Pints (pint)</option>
						<option value="quart">Quarts (quart)</option>
						<option value="gal">Gallons (gal)</option>
						<option value="cl">Centilitres (cl)</option>
						<option value="ml">Milliliters (ml)</option>
						<option value="dl">Deciliters (dl)</option>
						<option value="l">Liters (l)</option>
						<option value="kl">Kiloliters (kl)</option>
						<option value="hl">Hectoliters (hl)</option>
						<option value="tsk">Teskedar (tsk)</option>
						<option value="msk">Matskedar (msk)</option>
						<option value="kkp">Kaffekoppar (kkp)</option>
						<option value="glas">Glas (glas)</option>
						<option value="kanna">Kannor (kanna)</option> */ }
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
						{ /* <option value="in³">Cubic Inches (in³)</option>
						<option value="ft³">Cubic Feet (ft³)</option>
						<option value="yd³">Cubic Yards (yd³)</option>
						<option value="mi³">Cubic Miles (mi³)</option>
						<option value="tsp">Teaspoons (tsp)</option>
						<option value="tbsp">Tablespoons (tbsp)</option>
						<option value="fl oz">Fluid Ounces (fl oz)</option>
						<option value="cup">Cups (cup)</option>
						<option value="pint">Pints (pint)</option>
						<option value="quart">Quarts (quart)</option>
						<option value="gal">Gallons (gal)</option>
						<option value="cl">Centilitres (cl)</option>
						<option value="ml">Milliliters (ml)</option>
						<option value="dl">Deciliters (dl)</option>
						<option value="l">Liters (l)</option>
						<option value="kl">Kiloliters (kl)</option>
						<option value="hl">Hectoliters (hl)</option>
						<option value="tsk">Teskedar (tsk)</option>
						<option value="msk">Matskedar (msk)</option>
						<option value="kkp">Kaffekoppar (kkp)</option>
						<option value="glas">Glas (glas)</option>
						<option value="kanna">Kannor (kanna)</option> */ }
					</select>
				</div>
			</form>
			<div className="result" id="volume-output">
				0 °C = 32 °F
			</div>
		</div>
	);
}
