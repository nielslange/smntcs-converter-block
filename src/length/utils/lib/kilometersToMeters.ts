import { format } from '../format';

const kilometersToMeters = ( kilometers: number ): number => {
	return format( kilometers * 1000 );
};

export default kilometersToMeters;
