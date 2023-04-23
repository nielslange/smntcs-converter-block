const fahrenheitToKelvin = ( n: number ): number => {
	return ( n - 32 ) * ( 5 / 9 ) + 273.15;
};

export default fahrenheitToKelvin;
