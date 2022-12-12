import { format } from '../format';

const gramToKilogram = ( gram: number ): number => {
	return format( gram / 1000 );
};

export default gramToKilogram;
