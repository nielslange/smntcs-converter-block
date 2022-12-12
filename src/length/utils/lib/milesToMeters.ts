import { format } from '../format';

const milesToMeters = ( miles: number ): number => {
	return format( miles * 1609.34395 );
};

export default milesToMeters;
