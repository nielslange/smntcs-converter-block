import { format } from '../format';

const microgramToKilogram = ( microgram: number ): number => {
	return format( microgram / 1000000000 );
};

export default microgramToKilogram;
