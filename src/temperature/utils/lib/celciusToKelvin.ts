import { format } from '../format';

const celciusToKelvin = ( celcius: number ): number => {
	return format( +celcius + 273.15 );
};

export default celciusToKelvin;
