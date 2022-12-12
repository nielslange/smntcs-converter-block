import { format } from '../format';

const tonneToKilogram = ( tonne: number ): number => {
	return format( tonne * 907.184 );
};

export default tonneToKilogram;
