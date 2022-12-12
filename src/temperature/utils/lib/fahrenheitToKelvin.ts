import { format } from '../format';

const fahrenheitToKelvin = ( fahrenheit: number ): number => {
	return format( ( +fahrenheit + 459.67 ) * ( 5 / 9 ) );
};

export default fahrenheitToKelvin;
