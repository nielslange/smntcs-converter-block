import { format } from '../format';

const nauticalMilesToMeters = ( nauticalMiles: number ): number => {
	return format( nauticalMiles * 1852 );
};

export default nauticalMilesToMeters;
