import { formatResult } from './formatResult';

const celciusToKelvin = (celcius: number): number => {
	return formatResult(+celcius + 273.15);
};

export default celciusToKelvin;
