import {
	cubicMillimetersToCubikMeters,
	cubicCentimetersToCubikMeters,
	cubicDecimetersToCubikMeters,
	cubicKilometersToCubikMeters,
	centilitersToCubikMeters,
	decilitersToCubikMeters,
	millilitersToCubikMeters,
	litersToCubikMeters,
	kilolitersToCubikMeters,
	hectolitersToCubikMeters,
	cubicMetersToCubikMillimeters,
	cubicMetersToCubikCentimeters,
	cubicMetersToCubikDecimeters,
	cubicMetersToCubikKilometers,
	cubicMetersToMilliliters,
	cubicMetersToLiters,
	cubicMetersToKiloliters,
	cubicMetersToDeciliters,
	cubicMetersToCentiliters,
	cubicMetersToHectoliters,
} from './index';
import { format } from '../../format';
import type { props } from '../../types';

const convert = ( { input, from, to, precision = 6 }: props ): number => {
	if ( from === to ) return input;

	let result = 0;
	const output = 0;
	const multiplyer = 1e10;

	// Deactivate multiplyer for volume conversions.
	// input *= multiplyer;

	switch ( from ) {
		case 'mm³': result = cubicMillimetersToCubikMeters( input ); break; // prettier-ignore
		case 'cm³': result = cubicCentimetersToCubikMeters( input ); break; // prettier-ignore
		case 'dm³': result = cubicDecimetersToCubikMeters( input ); break; // prettier-ignore
		case 'km³': result = cubicKilometersToCubikMeters( input ); break; // prettier-ignore
		case 'cl': result = centilitersToCubikMeters( input ); break; // prettier-ignore
		case 'dl': result = decilitersToCubikMeters( input ); break; // prettier-ignore
		case 'ml': result = millilitersToCubikMeters( input ); break; // prettier-ignore
		case 'l': result = litersToCubikMeters( input ); break; // prettier-ignore
		case 'kl': result = kilolitersToCubikMeters( input ); break; // prettier-ignore
		case 'hl': result = hectolitersToCubikMeters( input ); break; // prettier-ignore
		default: result = input; // prettier-ignore
	}

	result *= multiplyer;

	switch ( to ) {
		case 'mm³': output = cubicMetersToCubikMillimeters( result ); break; // prettier-ignore
		case 'cm³': output = cubicMetersToCubikCentimeters( result ); break; // prettier-ignore
		case 'dm³': output = cubicMetersToCubikDecimeters( result ); break; // prettier-ignore
		case 'km³': output = cubicMetersToCubikKilometers( result ); break; // prettier-ignore
		case 'cl': output = cubicMetersToCentiliters( result ); break; // prettier-ignore
		case 'ml': output = cubicMetersToMilliliters( result ); break; // prettier-ignore
		case 'dl': output = cubicMetersToDeciliters( result ); break; // prettier-ignore
		case 'l': output = cubicMetersToLiters( result ); break; // prettier-ignore
		case 'kl': output = cubicMetersToKiloliters( result ); break; // prettier-ignore
		case 'hl': output = cubicMetersToHectoliters( result ); break; // prettier-ignore
		default: output = result; // prettier-ignore
	}

	output /= multiplyer;

	return format( output, precision );
};

export default convert;
