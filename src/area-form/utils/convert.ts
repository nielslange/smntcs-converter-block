import {
	squareMillimetersToSquareMeters,
	squareCentimetersToSquareMeters,
	squareDecimetersToSquareMeters,
	squareKilometersToSquareMeters,
	squareInchesToSquareMeters,
	squareFeetToSquareMeters,
	squareYardsToSquareMeters,
	squareMilesToSquareMeters,
	hectaresToSquareMeters,
	acresToSquareMeters,
	squareMetersToSquareMillimeters,
	squareMetersToSquareCentimeters,
	squareMetersToSquareDecimeters,
	squareMetersToSquareKilometers,
	squareMetersToSquareInches,
	squareMetersToSquareFeet,
	squareMetersToSquareYards,
	squareMetersToSquareMiles,
	squareMetersToHectares,
	squareMetersToAcres,
} from './index';
import { format } from '../../format';
import type { props } from '../../types';

const convert = ( { input, from, to, precision = 6 }: props ): number => {
	if ( from === to ) return input;

	let result = 0;
	const output = 0;
	const multiplyer = 1e10;

	switch ( from ) {
		case 'mm²': result = squareMillimetersToSquareMeters( input ); break; // prettier-ignore
		case 'cm²': result = squareCentimetersToSquareMeters( input ); break; // prettier-ignore
		case 'dm²': result = squareDecimetersToSquareMeters( input ); break; // prettier-ignore
		case 'km²': result = squareKilometersToSquareMeters( input ); break; // prettier-ignore
		case 'in²': result = squareInchesToSquareMeters( input ); break; // prettier-ignore
		case 'ft²': result = squareFeetToSquareMeters( input ); break; // prettier-ignore
		case 'yd²': result = squareYardsToSquareMeters( input ); break; // prettier-ignore
		case 'mi²': result = squareMilesToSquareMeters( input ); break; // prettier-ignore
		case 'ha': result = hectaresToSquareMeters( input ); break; // prettier-ignore
		case 'ac': result = acresToSquareMeters( input ); break; // prettier-ignore
		default: result = input; // prettier-ignore
	}

	result *= multiplyer;

	switch ( to ) {
		case 'mm²': output = squareMetersToSquareMillimeters( result ); break; // prettier-ignore
		case 'cm²': output = squareMetersToSquareCentimeters( result ); break; // prettier-ignore
		case 'dm²': output = squareMetersToSquareDecimeters( result ); break; // prettier-ignore
		case 'km²': output = squareMetersToSquareKilometers( result ); break; // prettier-ignore
		case 'in²': output = squareMetersToSquareInches( result ); break; // prettier-ignore
		case 'ft²': output = squareMetersToSquareFeet( result ); break; // prettier-ignore
		case 'yd²': output = squareMetersToSquareYards( result ); break; // prettier-ignore
		case 'mi²': output = squareMetersToSquareMiles( result ); break; // prettier-ignore
		case 'ha': output = squareMetersToHectares( result ); break; // prettier-ignore
		case 'ac': output = squareMetersToAcres( result ); break; // prettier-ignore
		default: output = result; // prettier-ignore
	}

	output /= multiplyer;

	return format( output, precision );
};

export default convert;
