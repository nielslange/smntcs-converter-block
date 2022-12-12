import { format } from '../format';

const millimetersToMeters = ( millimeters: number ): number => {
	return format( millimeters / 1000 );
};

export default millimetersToMeters;
