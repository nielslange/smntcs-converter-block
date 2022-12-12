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

	switch ( from ) {
		case '°C': result = celciusToKelvin(input); break; // prettier-ignore
		case '°F': result = fahrenheitToKelvin(input); break; // prettier-ignore
		case '°R': result = rankineToKelvin(input); break; // prettier-ignore
		default: result = input; // prettier-ignore
	}

	switch ( to ) {
		case '°C': return kelvinToCelcius( result ); // prettier-ignore
		case '°F': return kelvinToFahrenheit( result ); // prettier-ignore
		case '°R': return kelvinToRankine( result ); // prettier-ignore
		default: return result; // prettier-ignore
	}
};

export default convert;
