import { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import 'bootstrap/dist/css/bootstrap.min.css';
import './editor.scss';

export default function Edit() {
	const [ input, setInput ] = useState( 0 );
	const [ unitFrom, setUnitFrom ] = useState( '°C' );
	const [ unitTo, setUnitTo ] = useState( '°F' );
	const [ output, setOutput ] = useState( 0 );

	const convert = (
		input: number,
		unitFrom: string,
		unitTo: string
	): number => {
		let kelvin = 0;

		if ( unitFrom === '°C' ) {
			kelvin = input + 273.15;
		} else if ( unitFrom === '°F' ) {
			kelvin = ( ( input + 459.67 ) * 5 ) / 9;
		} else {
			kelvin = input;
		}

		if ( unitTo === '°C' ) {
			return kelvin - 273.15;
		} else if ( unitTo === '°F' ) {
			return ( kelvin * 9 ) / 5 - 459.67;
		} else {
			return kelvin;
		}
	};

	useEffect( () => {
		console.clear();
		console.log( { unitFrom, unitTo, input, output } );
		setOutput( convert( input, unitFrom, unitTo ) );
	}, [ unitFrom, unitTo, input, output ] );

	const result = input + unitFrom + ' = ' + output + unitTo;

	return (
		<div { ...useBlockProps() }>
			<form>
				<div className="form-group mb-3">
					<label htmlFor="unit-input">Input</label>
					<input
						type="number"
						className="form-control"
						id="unit-input"
						placeholder="0"
						onChange={ ( event ) => {
							setInput( event.target.value );
						} }
					/>
				</div>
				<div className="row">
					<div className="col-md-6 mb-3">
						<div className="form-group">
							<label htmlFor="unit-from">From</label>
							<select
								className="form-control"
								id="unit-from"
								onChange={ ( event ) => {
									setUnitFrom( event.target.value );
								} }
							>
								<option>°C</option>
								<option>°F</option>
								<option>°K</option>
							</select>
						</div>
					</div>
					<div className="col-md-6 mb-4">
						<div className="form-group">
							<label htmlFor="unit-to">To</label>
							<select
								className="form-control"
								id="unit-to"
								onChange={ ( event ) => {
									const selectElement =
										event.target as HTMLSelectElement;
									setUnitTo( selectElement.value );
								} }
							>
								<option>°C</option>
								<option selected>°F</option>
								<option>°K</option>
							</select>
						</div>
					</div>
				</div>
				<h2 className="alert alert-primary">{ result }</h2>
			</form>
		</div>
	);
}
