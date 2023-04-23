import {
	microgramToKilogram,
	milligramToKilogram,
	gramToKilogram,
	ounceToKilogram,
	poundToKilogram,
	tonneToKilogram,
	metricTonToKilogram,
	kilogramToMicrogram,
	kilogramToMilligram,
	kilogramToGram,
	kilogramToOunce,
	kilogramToPound,
	kilogramToTonne,
	kilogramToMetricTon,
} from './index';
import { format } from '../../format';
import type { props } from '../../types';

const convert = ( { input, from, to, precision = 10 }: props ): number => {
	if ( from === to ) return input;

	let result = 0;
	const output = 0;
	const multiplyer = 1e10;

	switch ( from ) {
		case 'µg': result = microgramToKilogram( input ); break; // prettier-ignore
		case 'mg': result = milligramToKilogram( input ); break; // prettier-ignore
		case 'g': result = gramToKilogram( input ); break; // prettier-ignore
		case 'oz': result = ounceToKilogram( input ); break; // prettier-ignore
		case 'lb': result = poundToKilogram( input ); break; // prettier-ignore
		case 't': result = tonneToKilogram( input ); break; // prettier-ignore
		case 'mt': result = metricTonToKilogram( input ); break; // prettier-ignore
		default: result = input; // prettier-ignore
	}

	result *= multiplyer;

	switch ( to ) {
		case 'µg': output = kilogramToMicrogram( result ); break; // prettier-ignore
		case 'mg': output = kilogramToMilligram( result ); break; // prettier-ignore
		case 'g': output = kilogramToGram( result ); break; // prettier-ignore
		case 'oz': output = kilogramToOunce( result ); break; // prettier-ignore
		case 'lb': output = kilogramToPound( result ); break; // prettier-ignore
		case 't': output = kilogramToTonne( result ); break; // prettier-ignore
		case 'mt': output = kilogramToMetricTon( result ); break; // prettier-ignore
		default: output = result; // prettier-ignore
	}

	output /= multiplyer;

	return format( output, precision );
};

export default convert;
