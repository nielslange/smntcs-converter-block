import { format } from '../format';

const metersToFeet = ( meters: number ): number => {
	return format( meters / 0.3048 );
};

export default metersToFeet;
