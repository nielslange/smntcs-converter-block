import { format } from '../format';

const metersToYards = ( meters: number ): number => {
	return format( meters / 0.9144 );
};

export default metersToYards;
