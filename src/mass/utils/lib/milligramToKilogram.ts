import { format } from '../format';

const milligramToKilogram = ( milligram: number ): number => {
	return format( milligram / 1000000 );
};

export default milligramToKilogram;
