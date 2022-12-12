import { formatResult } from './formatResult';

const kelvinToRankine = (kelvin: number): number => {
	return formatResult(+kelvin * (9 / 5));
};

export default kelvinToRankine;
