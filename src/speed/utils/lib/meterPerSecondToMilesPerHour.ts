const meterPerSecondToMilesPerHour = ( meterPerSecond: number ): number => {
	return ( meterPerSecond * 3600 ) / 1609.344;
};

export default meterPerSecondToMilesPerHour;
