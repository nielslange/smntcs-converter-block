import { formatResult } from './formatResult';

const rankineToKelvin = (rankine: number): number => {
	return formatResult(+rankine * (5 / 9));
};

export default rankineToKelvin;
