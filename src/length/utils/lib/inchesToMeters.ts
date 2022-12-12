import { format } from '../format';

const inchesToMeters = ( inches: number ): number => {
	return format( inches * 0.0254 );
};

export default inchesToMeters;
