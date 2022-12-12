import { format } from '../format';

const kilogramToOunce = ( kilogram: number ): number => {
	return format( kilogram / 0.02835 );
};

export default kilogramToOunce;
