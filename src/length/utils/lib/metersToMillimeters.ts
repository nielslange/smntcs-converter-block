import { format } from '../format';

const metersToMillimeters = ( meters: number ): number => {
	return format( meters * 1000 );
};

export default metersToMillimeters;
