import { format } from '../format';

const centimetersToMeters = ( centimeters: number ): number => {
	return format( centimeters / 100 );
};

export default centimetersToMeters;
