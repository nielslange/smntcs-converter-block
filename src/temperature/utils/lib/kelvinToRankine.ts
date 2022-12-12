import { format } from '../format';

const kelvinToRankine = ( kelvin: number ): number => {
	return format( +kelvin * ( 9 / 5 ) );
};

export default kelvinToRankine;
