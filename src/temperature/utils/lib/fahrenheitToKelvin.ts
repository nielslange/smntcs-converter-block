const fahrenheitToKelvin = ( fahrenheit: number ): number => {
	return ( +fahrenheit + 459.67 ) * ( 5 / 9 );
};

export default fahrenheitToKelvin;
