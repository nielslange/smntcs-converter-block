import {
	cubicMillimetersToCubikMeters,
	cubicCentimetersToCubikMeters,
	cubicDecimetersToCubikMeters,
	cubicKilometersToCubikMeters,
	cubicInchesToCubikMeters,
	cubicFeetToCubikMeters,
	cubicYardsToCubikMeters,
	cubicMilesToCubikMeters,
	teaspoonsToCubikMeters,
	tablespoonsToCubikMeters,
	fluidOuncesToCubikMeters,
	cupsToCubikMeters,
	pintsToCubikMeters,
	quartsToCubikMeters,
	gallonsToCubikMeters,
	millilitersToCubikMeters,
	litersToCubikMeters,
	kilolitersToCubikMeters,
	teskedarToCubikMeters,
	matskedarToCubikMeters,
	decilitersToCubikMeters,
	centilitersToCubikMeters,
	hectolitersToCubikMeters,
	kaffekopparToCubikMeters,
	glasToCubikMeters,
	kannorToCubikMeters,
	cubicMetersToCubikMillimeters,
	cubicMetersToCubikCentimeters,
	cubicMetersToCubikDecimeters,
	cubicMetersToCubikKilometers,
	cubicMetersToCubikInches,
	cubicMetersToCubikFeet,
	cubicMetersToCubikYards,
	cubicMetersToCubikMiles,
	cubicMetersToTeaspoons,
	cubicMetersToTablespoons,
	cubicMetersToFluidOunces,
	cubicMetersToCups,
	cubicMetersToPints,
	cubicMetersToQuarts,
	cubicMetersToGallons,
	cubicMetersToMilliliters,
	cubicMetersToLiters,
	cubicMetersToKiloliters,
	cubicMetersToTeskedar,
	cubicMetersToMatskedar,
	cubicMetersToDeciliters,
	cubicMetersToCentiliters,
	cubicMetersToHectoliters,
	cubicMetersToKaffekoppar,
	cubicMetersToGlas,
	cubicMetersToKannor,
} from './index';
import { format } from '../../format';
import type { props } from '../../types';

const convert = ( { input, from, to, precision = 6 }: props ): number => {
	if ( from === to ) return input;

	let result = 0;
	let output = 0;

	switch ( from ) {
		case 'mm³': result = cubicMillimetersToCubikMeters( input ); break; // prettier-ignore
		case 'cm³': result = cubicCentimetersToCubikMeters( input ); break; // prettier-ignore
		case 'dm³': result = cubicDecimetersToCubikMeters( input ); break; // prettier-ignore
		case 'km³': result = cubicKilometersToCubikMeters( input ); break; // prettier-ignore
		// case 'in³': result = cubicInchesToCubikMeters( input ); break; // prettier-ignore
		// case 'ft³': result = cubicFeetToCubikMeters( input ); break; // prettier-ignore
		// case 'yd³': result = cubicYardsToCubikMeters( input ); break; // prettier-ignore
		// case 'mi³': result = cubicMilesToCubikMeters( input ); break; // prettier-ignore
		// case 'tsp': result = teaspoonsToCubikMeters( input ); break; // prettier-ignore
		// case 'tbsp': result = tablespoonsToCubikMeters( input ); break; // prettier-ignore
		// case 'fl-oz': result = fluidOuncesToCubikMeters( input ); break; // prettier-ignore
		// case 'cup': result = cupsToCubikMeters( input ); break; // prettier-ignore
		// case 'pt': result = pintsToCubikMeters( input ); break; // prettier-ignore
		// case 'qt': result = quartsToCubikMeters( input ); break; // prettier-ignore
		// case 'gal': result = gallonsToCubikMeters( input ); break; // prettier-ignore
		case 'cl': result = centilitersToCubikMeters( input ); break; // prettier-ignore
		case 'dl': result = decilitersToCubikMeters( input ); break; // prettier-ignore
		case 'ml': result = millilitersToCubikMeters( input ); break; // prettier-ignore
		case 'l': result = litersToCubikMeters( input ); break; // prettier-ignore
		case 'kl': result = kilolitersToCubikMeters( input ); break; // prettier-ignore
		case 'hl': result = hectolitersToCubikMeters( input ); break; // prettier-ignore
		// case 'tsk': result = teskedarToCubikMeters( input ); break; // prettier-ignore
		// case 'msk': result = matskedarToCubikMeters( input ); break; // prettier-ignore
		// case 'kaffekopp': result = kaffekopparToCubikMeters( input ); break; // prettier-ignore
		// case 'glas': result = glasToCubikMeters( input ); break; // prettier-ignore
		// case 'kanna': result = kannorToCubikMeters( input ); break; // prettier-ignore
		default: result = input; // prettier-ignore
	}

	switch ( to ) {
		case 'mm³': output = cubicMetersToCubikMillimeters( result ); break; // prettier-ignore
		case 'cm³': output = cubicMetersToCubikCentimeters( result ); break; // prettier-ignore
		case 'dm³': output = cubicMetersToCubikDecimeters( result ); break; // prettier-ignore
		case 'km³': output = cubicMetersToCubikKilometers( result ); break; // prettier-ignore
		// case 'in³': output = cubicMetersToCubikInches( result ); break; // prettier-ignore
		// case 'ft³': output = cubicMetersToCubikFeet( result ); break; // prettier-ignore
		// case 'yd³': output = cubicMetersToCubikYards( result ); break; // prettier-ignore
		// case 'mi³': output = cubicMetersToCubikMiles( result ); break; // prettier-ignore
		// case 'tsp': output = cubicMetersToTeaspoons( result ); break; // prettier-ignore
		// case 'tbsp': output = cubicMetersToTablespoons( result ); break; // prettier-ignore
		// case 'fl-oz': output = cubicMetersToFluidOunces( result ); break; // prettier-ignore
		// case 'cup': output = cubicMetersToCups( result ); break; // prettier-ignore
		// case 'pt': output = cubicMetersToPints( result ); break; // prettier-ignore
		// case 'qt': output = cubicMetersToQuarts( result ); break; // prettier-ignore
		// case 'gal': output = cubicMetersToGallons( result ); break; // prettier-ignore
		case 'cl': output = cubicMetersToCentiliters( result ); break; // prettier-ignore
		case 'ml': output = cubicMetersToMilliliters( result ); break; // prettier-ignore
		case 'dl': output = cubicMetersToDeciliters( result ); break; // prettier-ignore
		case 'l': output = cubicMetersToLiters( result ); break; // prettier-ignore
		case 'kl': output = cubicMetersToKiloliters( result ); break; // prettier-ignore
		case 'hl': output = cubicMetersToHectoliters( result ); break; // prettier-ignore
		// case 'tsk': output = cubicMetersToTeskedar( result ); break; // prettier-ignore
		// case 'msk': output = cubicMetersToMatskedar( result ); break; // prettier-ignore
		// case 'kaffekopp': output = cubicMetersToKaffekoppar( result ); break; // prettier-ignore
		// case 'glas': output = cubicMetersToGlas( result ); break; // prettier-ignore
		// case 'kanna': output = cubicMetersToKannor( result ); break; // prettier-ignore
		default: output = result; // prettier-ignore
	}

	return format( output, precision );
};

export default convert;
