import { format } from '../format';

const usSurveyFeetToMeters = ( usSurveyFeet: number ): number => {
	return format( usSurveyFeet * 0.3048 );
};

export default usSurveyFeetToMeters;
