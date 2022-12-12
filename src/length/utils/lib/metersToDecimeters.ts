import { format } from '../format';

const metersToDecimeters = ( meters: number ): number => {
	return format( meters * 10 );
};

export default metersToDecimeters;
