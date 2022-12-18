import {
	millimetersToMeters,
	centimetersToMeters,
	decimetersToMeters,
	kilometersToMeters,
	inchesToMeters,
	feetToMeters,
	yardsToMeters,
	milesToMeters,
	nauticalMilesToMeters,
	usSurveyFeetToMeters,
	metersToMillimeters,
	metersToCentimeters,
	metersToDecimeters,
	metersToKilometers,
	metersToInches,
	metersToFeet,
	metersToYards,
	metersToMiles,
	metersToNauticalMiles,
	metersToUsSurveyFeet,
} from './index';
import { format } from '../../format';
import type { props } from '../../types';

const convert = ( { input, from, to, precision = 6 }: props ): number => {
	if ( from === to ) return input;

	let result = 0;
	let output = 0;
	let multiplyer = 1e10;

	switch ( from ) {
		case 'mm': result = millimetersToMeters( input ); break; // prettier-ignore
		case 'cm': result = centimetersToMeters( input ); break; // prettier-ignore
		case 'dm': result = decimetersToMeters( input ); break; // prettier-ignore
		case 'km': result = kilometersToMeters( input ); break; // prettier-ignore
		case 'in': result = inchesToMeters( input ); break; // prettier-ignore
		case 'ft': result = feetToMeters( input ); break; // prettier-ignore
		case 'yd': result = yardsToMeters( input ); break; // prettier-ignore
		case 'mi': result = milesToMeters( input ); break; // prettier-ignore
		case 'nmi': result = nauticalMilesToMeters( input ); break; // prettier-ignore
		case 'ft-us': result = usSurveyFeetToMeters( input ); break; // prettier-ignore
		default: result = input; // prettier-ignore
	}

	result *= multiplyer;

	switch ( to ) {
		case 'mm': output = metersToMillimeters( result ); break; // prettier-ignore
		case 'cm': output = metersToCentimeters( result ); break; // prettier-ignore
		case 'dm': output = metersToDecimeters( result ); break; // prettier-ignore
		case 'km': output = metersToKilometers( result ); break; // prettier-ignore
		case 'in': output = metersToInches( result ); break; // prettier-ignore
		case 'ft': output = metersToFeet( result ); break; // prettier-ignore
		case 'yd': output = metersToYards( result ); break; // prettier-ignore
		case 'mi': output = metersToMiles( result ); break; // prettier-ignore
		case 'nmi': output = metersToNauticalMiles( result ); break; // prettier-ignore
		case 'ft-us': output = metersToUsSurveyFeet( result ); break; // prettier-ignore
		default: output = result; // prettier-ignore
	}

	output /= multiplyer;

	return format( output, precision );
};

export default convert;
