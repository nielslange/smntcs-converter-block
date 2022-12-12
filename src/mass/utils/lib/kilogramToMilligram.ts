import { format } from '../format';

const kilogramToMilligram = ( kilogram: number ): number => {
	return format( kilogram * 1000000 );
};

export default kilogramToMilligram;
