import { format } from '../format';

const metersToNauticalMiles = ( meters: number ): number => {
	return format( meters / 1852 );
};

export default metersToNauticalMiles;
