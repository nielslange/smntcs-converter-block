const meterPerSecondToMilesPerHour = ( n: number ): number => {
	return ( n * 36e2 ) / 1609.344;
};

export default meterPerSecondToMilesPerHour;
