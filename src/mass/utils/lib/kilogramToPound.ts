import { format } from '../format';

const kilogramToPound = ( kilogram: number ): number => {
	return format( kilogram / 0.45359 );
};

export default kilogramToPound;
