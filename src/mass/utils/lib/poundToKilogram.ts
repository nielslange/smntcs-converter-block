import { format } from '../format';

const poundToKilogram = ( pound: number ): number => {
	return format( pound * 0.45359 );
};

export default poundToKilogram;
