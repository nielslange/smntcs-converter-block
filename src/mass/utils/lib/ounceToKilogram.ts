import { format } from '../format';

const ounceToKilogram = ( ounce: number ): number => {
	return format( ounce * 0.02835 );
};

export default ounceToKilogram;
