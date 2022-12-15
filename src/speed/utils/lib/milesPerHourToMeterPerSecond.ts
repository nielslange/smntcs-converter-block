const milesPerHourToMeterPerSecond = ( milesPerHour: number ): number => {
	return ( milesPerHour * 1609.344 ) / 3600;
};

export default milesPerHourToMeterPerSecond;
