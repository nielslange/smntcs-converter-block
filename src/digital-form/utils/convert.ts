import {
	bitToByte,
	kilobitToByte,
	megabitToByte,
	gigabitToByte,
	terabitToByte,
	kilobyteToByte,
	megabyteToByte,
	gigabyteToByte,
	terabyteToByte,
	byteToBit,
	byteToKilobit,
	byteToMegabit,
	byteToGigabit,
	byteToTerabit,
	byteToKilobyte,
	byteToMegabyte,
	byteToGigabyte,
	byteToTerabyte,
} from './index';
import { format } from '../../format';
import type { props } from '../../types';

const convert = ( { input, from, to, precision = 6 }: props ): number => {
	if ( from === to ) return input;

	let result = 0;
	let output = 0;

	switch ( from ) {
		case 'b': result = bitToByte( input ); break; // prettier-ignore
		case 'kb': result = kilobitToByte( input ); break; // prettier-ignore
		case 'Mb': result = megabitToByte( input ); break; // prettier-ignore
		case 'Gb': result = gigabitToByte( input ); break; // prettier-ignore
		case 'Tb': result = terabitToByte( input ); break; // prettier-ignore
		case 'kB': result = kilobyteToByte( input ); break; // prettier-ignore
		case 'MB': result = megabyteToByte( input ); break; // prettier-ignore
		case 'GB': result = gigabyteToByte( input ); break; // prettier-ignore
		case 'TB': result = terabyteToByte( input ); break; // prettier-ignore
		default: result = input; // prettier-ignore
	}

	switch ( to ) {
		case 'b': output = byteToBit( result ); break; // prettier-ignore
		case 'kb': output = byteToKilobit( result ); break; // prettier-ignore
		case 'Mb': output = byteToMegabit( result ); break; // prettier-ignore
		case 'Gb': output = byteToGigabit( result ); break; // prettier-ignore
		case 'Tb': output = byteToTerabit( result ); break; // prettier-ignore
		case 'kB': output = byteToKilobyte( result ); break; // prettier-ignore
		case 'MB': output = byteToMegabyte( result ); break; // prettier-ignore
		case 'GB': output = byteToGigabyte( result ); break; // prettier-ignore
		case 'TB': output = byteToTerabyte( result ); break; // prettier-ignore
		default: output = result; // prettier-ignore
	}

	return format( output, precision );
};

export default convert;
