import { format } from '../format';

const rankineToKelvin = ( rankine: number ): number => {
	return format( +rankine * ( 5 / 9 ) );
};

export default rankineToKelvin;
