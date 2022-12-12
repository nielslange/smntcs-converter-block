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
					<label htmlFor="mass-input">{ __( 'Input', 'smntcs-converter-block' ) }</label>
					<input type="number" id="mass-input" placeholder="0" />
				</div>
				<div>
					<label htmlFor="mass-from">{ __( 'From', 'smntcs-converter-block' ) }</label>
					<select id="mass-from">
						<option value="µg">Micrograms (µg)</option>
						<option value="mg">Milligrams (mg)</option>
						<option value="g">Grams (g)</option>
						<option value="kg">Kilograms (kg)</option>
						<option value="oz">Ounces (oz)</option>
						<option value="lb">Pounds (lb)</option>
						<option value="t">Tons (t)</option>
						<option value="mt">Metric Tonnes (mt)</option>
					</select>
				</div>
				<div>
					<label htmlFor="mass-to">{ __( 'To', 'smntcs-converter-block' ) }</label>
					<select id="mass-to">
						<option value="µg">Micrograms (µg)</option>
						<option value="mg" selected>
							Milligrams (mg)
						</option>{ ' ' }
						<option value="g">Grams (g)</option>
						<option value="kg">Kilograms (kg)</option>
						<option value="oz">Ounces (oz)</option>
						<option value="lb">Pounds (lb)</option>
						<option value="t">Tons (t)</option>
						<option value="mt">Metric Tonnes (mt)</option>
					</select>
				</div>
			</form>
			<div className="result" id="mass-output">
				0 µg = 0 mg
			</div>
		</div>
	);
}
