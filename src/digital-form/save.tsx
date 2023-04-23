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
					<label htmlFor="digital-input">{ __( 'Input', 'smntcs-converter-block' ) }</label>
					<input type="number" id="digital-input" placeholder="0" />
				</div>
				<div>
					<label htmlFor="digital-from">{ __( 'From', 'smntcs-converter-block' ) }</label>
					<select id="digital-from">
						<option value="b">Bit (b)</option>
						<option value="kb">Kilobit (kb)</option>
						<option value="mb">Megabit (mb)</option>
						<option value="gb">Gigabit (gb)</option>
						<option value="tb">Terabit (tb)</option>
						<option value="B">Byte (B)</option>
						<option value="kB">Kilobyte (kB)</option>
						<option value="mB">Megabyte (mB)</option>
						<option value="gB">Gigabyte (gB)</option>
						<option value="tB">Terabyte (tB)</option>
					</select>
				</div>
				<div>
					<label htmlFor="digital-to">{ __( 'To', 'smntcs-converter-block' ) }</label>
					<select id="digital-to">
						<option value="b">Bit (b)</option>
						<option value="kb" selected>
							Kilobit (kb)
						</option>
						<option value="mb">Megabit (mb)</option>
						<option value="gb">Gigabit (gb)</option>
						<option value="tb">Terabit (tb)</option>
						<option value="B">Byte (B)</option>
						<option value="kB">Kilobyte (kB)</option>
						<option value="mB">Megabyte (mB)</option>
						<option value="gB">Gigabyte (gB)</option>
						<option value="tB">Terabyte (tB)</option>
					</select>
				</div>
			</form>
		</div>
	);
}
