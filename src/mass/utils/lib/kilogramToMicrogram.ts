import { format } from '../format';

const kilogramToMicrogram = ( kilogram: number ): number => {
	return format( kilogram * 1000000000 );
};

export default kilogramToMicrogram;
