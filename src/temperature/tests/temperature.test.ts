import convert from '../utils/convert';

const cases = [
	[ 10, '°C', '°F', 50 ],
	[ 10, '°C', '°K', 283.15 ],
	[ 10, '°C', '°R', 509.67 ],
	[ 10, '°F', '°C', -12.22 ],
	[ 10, '°F', '°K', 260.93 ],
	[ 10, '°F', '°R', 469.67 ],
	[ 10, '°K', '°C', -263.15 ],
	[ 10, '°K', '°F', -441.67 ],
	[ 10, '°K', '°R', 18 ],
];

describe( 'Convert temperature', () => {
	test.each( cases )(
		'%f %s to %s equals %f',
		( input: number, from: string, to: string, output: number ) => {
			expect( convert( { input, from, to } ) ).toBe( output );
		}
	);
} );
