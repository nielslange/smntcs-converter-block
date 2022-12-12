import { formatResult } from './formatResult';

const kelvinToFahrenheit = (kelvin: number): number => {
	return formatResult((+kelvin - 273.15) * (9 / 5) + 32);
};

export default kelvinToFahrenheit;
