import { format } from '../format';

const yardsToMeters = ( yards: number ): number => {
	return format( yards * 0.9144 );
};

export default yardsToMeters;
