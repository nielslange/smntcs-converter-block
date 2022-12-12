import { format } from '../format';

const metersToKilometers = ( meters: number ): number => {
	return format( meters / 1000 );
};

export default metersToKilometers;
