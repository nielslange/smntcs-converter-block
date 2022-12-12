import { format } from '../format';

const kelvinToRankine = ( kelvin: number ): number => {
	return format( +kelvin * 1.8 );
};

export default kelvinToRankine;
