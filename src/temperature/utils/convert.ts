import {
	celciusToKelvin,
	fahrenheitToKelvin,
	rankineToKelvin,
	kelvinToCelcius,
	kelvinToFahrenheit,
	kelvinToRankine,
} from './index';
import type { props } from '../../types';

const convert = ( { input, from, to }: props ): number => {
	if ( from === to ) return input;

	let result = 0;
	let output = 0;

	switch ( from ) {
		case '°C': result = celciusToKelvin(input); break; // prettier-ignore
		case '°F': result = fahrenheitToKelvin(input); break; // prettier-ignore
		case '°R': result = rankineToKelvin(input); break; // prettier-ignore
		default: result = input; break; // prettier-ignore
	}

	switch ( to ) {
		case '°C': output = kelvinToCelcius( result ); break; // prettier-ignore
		case '°F': output = kelvinToFahrenheit( result ); break; // prettier-ignore
		case '°R': output = kelvinToRankine( result ); break; // prettier-ignore
		default: output = result; // prettier-ignore
	}

	return output;
};

export default convert;
