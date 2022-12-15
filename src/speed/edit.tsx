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
						<label htmlFor="speed-input">{ __( 'Input', 'smntcs-converter-block' ) }</label>
						<input type="number" id="speed-input" placeholder="0" />
					</div>
					<div>
						<label htmlFor="speed-from">{ __( 'From', 'smntcs-converter-block' ) }</label>
						<select id="speed-from">
							<option value="m/s">Metres per second (m/s)</option>
							<option value="km/h">Kilometres per hour (km/h)</option>
							<option value="m/h">Miles per hour (m/h)</option>
							<option value="kn">Knots (kn)</option>
							<option value="ft/s">Feet per second (ft/s)</option>
						</select>
					</div>
					<div>
						<label htmlFor="speed-to">{ __( 'To', 'smntcs-converter-block' ) }</label>
						<select id="speed-to">
							<option value="m/s">Metres per second (m/s)</option>
							<option value="km/h" selected>
								Kilometres per hour (km/h)
							</option>
							<option value="m/h">Miles per hour (m/h)</option>
							<option value="kn">Knots (kn)</option>
							<option value="ft/s">Feet per second (ft/s)</option>
						</select>
					</div>
				</form>
				<div className="result" id="speed-output">
					0 m/s = 0 km/h
				</div>
			</Disabled>
		</div>
	);
}
