import { format } from '../format';

const metersToCentimeters = ( meters: number ): number => {
	return format( meters * 100 );
};

export default metersToCentimeters;
