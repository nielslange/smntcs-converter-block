import { format } from '../format';

const kilogramToGram = ( kilogram: number ): number => {
	return format( kilogram * 1000 );
};

export default kilogramToGram;
