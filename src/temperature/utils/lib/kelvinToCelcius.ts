import { format } from '../format';

const kelvinToCelcius = ( kelvin: number ): number => {
	return format( +kelvin - 273.15 );
};

export default kelvinToCelcius;
