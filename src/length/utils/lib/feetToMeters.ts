import { format } from '../format';

const feetToMeters = ( feet: number ): number => {
	return format( feet * 0.3048 );
};

export default feetToMeters;
