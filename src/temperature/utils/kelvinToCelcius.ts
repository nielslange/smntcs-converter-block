import { formatResult } from './formatResult';

const kelvinToCelcius = (kelvin: number): number => {
	return formatResult(+kelvin - 273.15);
};

export default kelvinToCelcius;
