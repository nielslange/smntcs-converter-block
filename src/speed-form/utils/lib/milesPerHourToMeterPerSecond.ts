const milesPerHourToMeterPerSecond = ( n: number ): number => {
	return ( n * 1609.344 ) / 36e2;
};

export default milesPerHourToMeterPerSecond;
