import { format } from '../format';

const kelvinToFahrenheit = ( kelvin: number ): number => {
	return format( ( +kelvin - 273.15 ) * ( 9 / 5 ) + 32 );
};

export default kelvinToFahrenheit;
