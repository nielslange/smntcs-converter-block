import convert from '../utils/convert';

const cases = [
	// Cubic Millimeters (mm³)
	[ 23, 'mm³', 'mm³', 23 ],
	[ 23, 'mm³', 'cm³', 2.3e-2 ],
	[ 23, 'mm³', 'dm³', 2.3e-5 ],
	[ 23, 'mm³', 'm³', 2.3e-8 ],
	[ 23, 'mm³', 'km³', 2.3e-17 ],
	[ 23, 'mm³', 'cl', 2.3e-3 ],
	[ 23, 'mm³', 'ml', 2.3e-2 ],
	[ 23, 'mm³', 'dl', 2.3e-4 ],
	[ 23, 'mm³', 'l', 2.3e-5 ],
	[ 23, 'mm³', 'kl', 2.3e-8 ],
	[ 23, 'mm³', 'hl', 2.3e-7 ],

	// Cubic Centimeters (cm³)
	[ 23, 'cm³', 'mm³', 23e3 ],
	[ 23, 'cm³', 'cm³', 23 ],
	[ 23, 'cm³', 'dm³', 2.3e-2 ],
	[ 23, 'cm³', 'm³', 2.3e-5 ],
	[ 23, 'cm³', 'km³', 2.3e-14 ],
	[ 23, 'cm³', 'cl', 2.3 ],
	[ 23, 'cm³', 'ml', 23 ],
	[ 23, 'cm³', 'dl', 2.3e-1 ],
	[ 23, 'cm³', 'l', 2.3e-2 ],
	[ 23, 'cm³', 'kl', 2.3e-5 ],
	[ 23, 'cm³', 'hl', 2.3e-4 ],

	// Cubic Decimeters (dm³)
	[ 23, 'dm³', 'mm³', 23e6 ],
	[ 23, 'dm³', 'cm³', 23e3 ],
	[ 23, 'dm³', 'dm³', 23 ],
	[ 23, 'dm³', 'm³', 2.3e-2 ],
	[ 23, 'dm³', 'km³', 2.3e-11 ],
	[ 23, 'dm³', 'cl', 23e2 ],
	[ 23, 'dm³', 'ml', 23e3 ],
	[ 23, 'dm³', 'dl', 23e1 ],
	[ 23, 'dm³', 'l', 23 ],
	[ 23, 'dm³', 'kl', 2.3e-2 ],
	[ 23, 'dm³', 'hl', 2.3e-1 ],

	// Cubic Meters (m³)
	[ 23, 'm³', 'mm³', 23e9 ],
	[ 23, 'm³', 'cm³', 23e6 ],
	[ 23, 'm³', 'dm³', 23e3 ],
	[ 23, 'm³', 'm³', 23 ],
	[ 23, 'm³', 'km³', 2.3e-8 ],
	[ 23, 'm³', 'cl', 23e5 ],
	[ 23, 'm³', 'ml', 23e6 ],
	[ 23, 'm³', 'dl', 23e4 ],
	[ 23, 'm³', 'l', 23e3 ],
	[ 23, 'm³', 'kl', 23 ],
	[ 23, 'm³', 'hl', 2.3e2 ],

	// Cubic Kilometers (km³)
	[ 23, 'km³', 'mm³', 2.3e19 ],
	[ 23, 'km³', 'cm³', 2.3e16 ],
	[ 23, 'km³', 'dm³', 2.3e13 ],
	[ 23, 'km³', 'm³', 2.3e10 ],
	[ 23, 'km³', 'km³', 23 ],
	[ 23, 'km³', 'cl', 2.3e15 ],
	[ 23, 'km³', 'ml', 2.3e16 ],
	[ 23, 'km³', 'dl', 2.3e14 ],
	[ 23, 'km³', 'l', 2.3e13 ],
	[ 23, 'km³', 'kl', 2.3e10 ],
	[ 23, 'km³', 'hl', 2.3e11 ],
];

describe( 'Convert volume', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to, precision: 20 } ) ).toBe( output );
	} );
} );
