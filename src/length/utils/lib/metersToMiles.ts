import { format } from '../format';

const metersToMiles = ( meters: number ): number => {
	return format( meters / 1609.3439 );
};

export default metersToMiles;
