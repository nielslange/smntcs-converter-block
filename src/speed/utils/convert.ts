import {
	kilometersPerHourToMeterPerSecond,
	milesPerHourToMeterPerSecond,
	knotsToMeterPerSecond,
	feetPerSecondToMeterPerSecond,
	meterPerSecondToKilometersPerHour,
	meterPerSecondToMilesPerHour,
	meterPerSecondToKnots,
	meterPerSecondToFeetPerSecond,
} from './index';
import { format } from '../../format';
import type { props } from '../../types';

const convert = ( { input, from, to, precision = 2 }: props ): number => {
	if ( from === to ) return input;

	let result = 0;
	const output = 0;
	const multiplyer = 1e10;

	switch ( from ) {
		case 'km/h': result = kilometersPerHourToMeterPerSecond( input ); break; // prettier-ignore
		case 'm/h': result = milesPerHourToMeterPerSecond( input ); break; // prettier-ignore
		case 'kn': result = knotsToMeterPerSecond( input ); break; // prettier-ignore
		case 'ft/s': result = feetPerSecondToMeterPerSecond( input ); break; // prettier-ignore
		default: result = input; // prettier-ignore
	}

	result *= multiplyer;

	switch ( to ) {
		case 'km/h': output = meterPerSecondToKilometersPerHour( result ); break; // prettier-ignore
		case 'm/h': output = meterPerSecondToMilesPerHour( result ); break; // prettier-ignore
		case 'kn': output = meterPerSecondToKnots( result ); break; // prettier-ignore
		case 'ft/s': output = meterPerSecondToFeetPerSecond( result ); break; // prettier-ignore
		default: output = result; // prettier-ignore
	}

	output /= multiplyer;

	return format( output, precision );
};

export default convert;
