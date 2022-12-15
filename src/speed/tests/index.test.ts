import convert from '../utils/convert';

const cases = [
	[ 23, 'm/s', 'km/h', 82.8 ],
	[ 23, 'm/s', 'm/h', 51.45 ],
	[ 23, 'm/s', 'kn', 44.71 ],
	[ 23, 'm/s', 'ft/s', 75.46 ],
	[ 23, 'km/h', 'm/s', 6.39 ],
	[ 23, 'km/h', 'm/h', 14.29 ],
	[ 23, 'km/h', 'kn', 12.42 ],
	[ 23, 'km/h', 'ft/s', 20.96 ],
	[ 23, 'm/h', 'm/s', 10.28 ],
	[ 23, 'm/h', 'km/h', 37.01 ],
	[ 23, 'm/h', 'kn', 19.99 ],
	[ 23, 'm/h', 'ft/s', 33.73 ],
	[ 23, 'kn', 'm/s', 11.83 ],
	[ 23, 'kn', 'km/h', 42.6 ],
	[ 23, 'kn', 'm/h', 26.47 ],
	[ 23, 'kn', 'ft/s', 38.82 ],
	[ 23, 'ft/s', 'm/s', 7.01 ],
	[ 23, 'ft/s', 'km/h', 25.24 ],
	[ 23, 'ft/s', 'm/h', 15.68 ],
	[ 23, 'ft/s', 'kn', 13.63 ],
];

describe( 'Convert speed', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to } ) ).toBe( output );
	} );
} );
