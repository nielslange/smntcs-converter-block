import { formatResult } from './formatResult';

const fahrenheitToKelvin = (fahrenheit: number): number => {
	return formatResult((+fahrenheit + 459.67) * (5 / 9));
};

export default fahrenheitToKelvin;
