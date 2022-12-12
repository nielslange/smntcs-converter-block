import { format } from '../format';

const metricTonToKilogram = ( metricTon: number ): number => {
	return format( metricTon * 1000 );
};

export default metricTonToKilogram;
