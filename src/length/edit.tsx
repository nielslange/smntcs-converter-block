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
						<label htmlFor="length-input">{ __( 'Input', 'smntcs-converter-block' ) }</label>
						<input type="number" id="length-input" placeholder="0" />
					</div>
					<div>
						<label htmlFor="length-from">{ __( 'From', 'smntcs-converter-block' ) }</label>
						<select id="length-from">
							<option value="mm">Millimeter</option>
							<option value="cm">Centimeter</option>
							<option value="dm">Decimeter</option>
							<option value="m">Meter</option>
							<option value="km">Kilometer</option>
							<option value="in">Inch</option>
							<option value="ft">Foot</option>
							<option value="yd">Yard</option>
							<option value="mi">Mile</option>
							<option value="nmi">Nautical Mile</option>
							<option value="ft-us">US Survey Feet</option>
						</select>
					</div>
					<div>
						<label htmlFor="length-to">{ __( 'To', 'smntcs-converter-block' ) }</label>
						<select id="length-to">
							<option value="mm">Millimeter</option>
							<option value="cm" selected>
								Centimeter
							</option>
							<option value="dm">Decimeter</option>
							<option value="m">Meter</option>
							<option value="km">Kilometer</option>
							<option value="in">Inch</option>
							<option value="ft">Foot</option>
							<option value="yd">Yard</option>
							<option value="mi">Mile</option>
							<option value="nmi">Nautical Mile</option>
							<option value="ft-us">US Survey Feet</option>
						</select>
					</div>
				</form>
				<div className="result" id="length-output">
					0 mm = 0 cm
				</div>
			</Disabled>
		</div>
	);
}
