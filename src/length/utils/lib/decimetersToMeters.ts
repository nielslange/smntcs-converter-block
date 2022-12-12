import { format } from '../format';

const decimetersToMeters = ( decimeters: number ): number => {
	return format( decimeters / 10 );
};

export default decimetersToMeters;
