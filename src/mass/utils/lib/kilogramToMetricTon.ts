import { format } from '../format';

const kilogramToMetricTon = ( kilogram: number ): number => {
	return format( kilogram / 1000 );
};

export default kilogramToMetricTon;
