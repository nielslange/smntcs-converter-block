import convert from '../utils/convert';

const cases = [
	[ 23, '°C', '°F', 73.4 ],
	[ 23, '°C', '°K', 296.15 ],
	[ 23, '°C', '°R', 533.07 ],
	[ 23, '°F', '°C', -5 ],
	[ 23, '°F', '°K', 268.15 ],
	[ 23, '°F', '°R', 482.67 ],
	[ 23, '°K', '°C', -250.15 ],
	[ 23, '°K', '°F', -418.27 ],
	[ 23, '°K', '°R', 41.4 ],
];

describe( 'Convert temperature', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to } ) ).toBe( output );
	} );
} );
