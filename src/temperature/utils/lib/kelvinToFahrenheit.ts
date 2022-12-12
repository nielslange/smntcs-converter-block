import { format } from '../format';

const kelvinToFahrenheit = ( kelvin: number ): number => {
	return format( ( +kelvin * 9 ) / 5 - 459.67 );
};

export default kelvinToFahrenheit;
