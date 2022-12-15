const meterPerSecondToKilometersPerHour = ( meterPerSecond: number ): number => {
	return ( meterPerSecond * 3600 ) / 1000;
};

export default meterPerSecondToKilometersPerHour;
