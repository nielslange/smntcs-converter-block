import { format } from '../format';

const kilogramToTonne = ( kilogram: number ): number => {
	return format( kilogram / 907.184 );
};

export default kilogramToTonne;
