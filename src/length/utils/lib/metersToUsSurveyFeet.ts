import { format } from '../format';

const metersToUsSurveyFeet = ( meters: number ): number => {
	return format( meters / 0.3048 );
};

export default metersToUsSurveyFeet;
