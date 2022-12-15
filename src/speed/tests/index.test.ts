import convert from '../utils/convert';

const cases = [
	// Meters per second
	[ 23, 'm/s', 'm/s', 23 ],
	[ 23, 'm/s', 'km/h', 82.8 ],
	[ 23, 'm/s', 'm/h', 51.45 ],
	[ 23, 'm/s', 'kn', 44.71 ],
	[ 23, 'm/s', 'ft/s', 75.46 ],

	// Kilometers per hour
	[ 23, 'km/h', 'm/s', 6.39 ],
	[ 23, 'km/h', 'km/h', 23 ],
	[ 23, 'km/h', 'm/h', 14.29 ],
	[ 23, 'km/h', 'kn', 12.42 ],
	[ 23, 'km/h', 'ft/s', 20.96 ],

	// Miles per hour
	[ 23, 'm/h', 'm/s', 10.28 ],
	[ 23, 'm/h', 'km/h', 37.01 ],
	[ 23, 'm/h', 'm/h', 23 ],
	[ 23, 'm/h', 'kn', 19.99 ],
	[ 23, 'm/h', 'ft/s', 33.73 ],

	// Knots
	[ 23, 'kn', 'm/s', 11.83 ],
	[ 23, 'kn', 'km/h', 42.6 ],
	[ 23, 'kn', 'm/h', 26.47 ],
	[ 23, 'kn', 'kn', 23 ],
	[ 23, 'kn', 'ft/s', 38.82 ],

	// Feet per second
	[ 23, 'ft/s', 'm/s', 7.01 ],
	[ 23, 'ft/s', 'km/h', 25.24 ],
	[ 23, 'ft/s', 'm/h', 15.68 ],
	[ 23, 'ft/s', 'kn', 13.63 ],
	[ 23, 'ft/s', 'ft/s', 23 ],
];

describe( 'Convert speed', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to } ) ).toBe( output );
	} );
} );
