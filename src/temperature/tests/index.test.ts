import convert from '../utils/convert';

const cases = [
	// Celsius
	[ 23, '°C', '°C', 23 ],
	[ 23, '°C', '°F', 73.4 ],
	[ 23, '°C', '°K', 296.15 ],
	[ 23, '°C', '°R', 533.07 ],

	// Fahrenheit
	[ 23, '°F', '°C', -5 ],
	[ 23, '°F', '°F', 23 ],
	[ 23, '°F', '°K', 268.15 ],
	[ 23, '°F', '°R', 482.67 ],

	// Rankine
	[ 23, '°K', '°C', -250.15 ],
	[ 23, '°K', '°F', -418.27 ],
	[ 23, '°K', '°K', 23 ],
	[ 23, '°K', '°R', 41.4 ],

	// Rankine
	[ 23, '°R', '°C', -260.37 ],
	[ 23, '°R', '°F', -436.67 ],
	[ 23, '°R', '°K', 12.78 ],
	[ 23, '°R', '°R', 23 ],
];

describe( 'Convert temperature', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to } ) ).toBe( output );
	} );
} );
