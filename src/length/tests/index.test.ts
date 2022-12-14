import convert from '../utils/convert';

const cases = [
	// Milimeters
	[ 23, 'mm', 'mm', 23 ],
	[ 23, 'mm', 'cm', 2.3 ],
	[ 23, 'mm', 'dm', 0.23 ],
	[ 23, 'mm', 'm', 0.023 ],
	[ 23, 'mm', 'km', 2.3e-5 ],
	[ 23, 'mm', 'mi', 0.000014 ],
	[ 23, 'mm', 'nmi', 0.000012 ],
	[ 23, 'mm', 'yd', 0.025153 ],
	[ 23, 'mm', 'ft', 0.075459 ],
	[ 23, 'mm', 'in', 0.905512 ],
	[ 23, 'mm', 'ft-us', 0.075459 ],

	// Centimeters
	[ 23, 'cm', 'mm', 230 ],
	[ 23, 'cm', 'cm', 23 ],
	[ 23, 'cm', 'dm', 2.3 ],
	[ 23, 'cm', 'm', 0.23 ],
	[ 23, 'cm', 'km', 0.00023 ],
	[ 23, 'cm', 'mi', 0.000143 ],
	[ 23, 'cm', 'nmi', 0.000124 ],
	[ 23, 'cm', 'yd', 0.251531 ],
	[ 23, 'cm', 'ft', 0.754593 ],
	[ 23, 'cm', 'in', 9.055118 ],
	[ 23, 'cm', 'ft-us', 0.754593 ],

	// Decimeters
	[ 23, 'dm', 'mm', 2300 ],
	[ 23, 'dm', 'cm', 230 ],
	[ 23, 'dm', 'dm', 23 ],
	[ 23, 'dm', 'm', 2.3 ],
	[ 23, 'dm', 'km', 0.0023 ],
	[ 23, 'dm', 'mi', 0.001429 ],
	[ 23, 'dm', 'nmi', 0.001242 ],
	[ 23, 'dm', 'yd', 2.515311 ],
	[ 23, 'dm', 'ft', 7.545932 ],
	[ 23, 'dm', 'in', 90.551181 ],
	[ 23, 'dm', 'ft-us', 7.545932 ],

	// Meters
	[ 23, 'm', 'mm', 23000 ],
	[ 23, 'm', 'cm', 2300 ],
	[ 23, 'm', 'dm', 230 ],
	[ 23, 'm', 'm', 23 ],
	[ 23, 'm', 'km', 0.023 ],
	[ 23, 'm', 'mi', 0.014292 ],
	[ 23, 'm', 'nmi', 0.012419 ],
	[ 23, 'm', 'yd', 25.153106 ],
	[ 23, 'm', 'ft', 75.459318 ],
	[ 23, 'm', 'in', 905.511811 ],
	[ 23, 'm', 'ft-us', 75.459318 ],

	// Kilometers
	[ 23, 'km', 'mm', 2.3e7 ],
	[ 23, 'km', 'cm', 2.3e6 ],
	[ 23, 'km', 'dm', 2.3e5 ],
	[ 23, 'km', 'm', 23000 ],
	[ 23, 'km', 'km', 23 ],
	[ 23, 'km', 'mi', 14.291538 ],
	[ 23, 'km', 'nmi', 12.419006 ],
	[ 23, 'km', 'yd', 25153.105862 ],
	[ 23, 'km', 'ft', 75459.317585 ],
	[ 23, 'km', 'in', 905511.811024 ],
	[ 23, 'km', 'ft-us', 75459.317585 ],

	// Miles
	[ 23, 'mi', 'mm', 37014910.85 ],
	[ 23, 'mi', 'cm', 3701491.085 ],
	[ 23, 'mi', 'dm', 370149.1085 ],
	[ 23, 'mi', 'm', 37014.91085 ],
	[ 23, 'mi', 'km', 37.014911 ],
	[ 23, 'mi', 'mi', 23 ],
	[ 23, 'mi', 'nmi', 19.986453 ],
	[ 23, 'mi', 'yd', 40479.998742 ],
	[ 23, 'mi', 'ft', 121439.996227 ],
	[ 23, 'mi', 'in', 1457279.954724 ],
	[ 23, 'mi', 'ft-us', 121439.996227 ],

	// Nautical miles
	[ 23, 'nmi', 'mm', 42596000 ],
	[ 23, 'nmi', 'cm', 4259600 ],
	[ 23, 'nmi', 'dm', 425960 ],
	[ 23, 'nmi', 'm', 42596 ],
	[ 23, 'nmi', 'km', 42.596 ],
	[ 23, 'nmi', 'mi', 26.467929 ],
	[ 23, 'nmi', 'nmi', 23 ],
	[ 23, 'nmi', 'yd', 46583.552056 ],
	[ 23, 'nmi', 'ft', 139750.656168 ],
	[ 23, 'nmi', 'in', 1677007.874016 ],
	[ 23, 'nmi', 'ft-us', 139750.656168 ],

	// Yards
	[ 23, 'yd', 'mm', 21031.2 ],
	[ 23, 'yd', 'cm', 2103.12 ],
	[ 23, 'yd', 'dm', 210.312 ],
	[ 23, 'yd', 'm', 21.0312 ],
	[ 23, 'yd', 'km', 0.021031 ],
	[ 23, 'yd', 'mi', 0.013068 ],
	[ 23, 'yd', 'nmi', 0.011356 ],
	[ 23, 'yd', 'yd', 23 ],
	[ 23, 'yd', 'ft', 69 ],
	[ 23, 'yd', 'in', 828 ],
	[ 23, 'yd', 'ft-us', 69 ],

	// Feet
	[ 23, 'ft', 'mm', 7010.4 ],
	[ 23, 'ft', 'cm', 701.04 ],
	[ 23, 'ft', 'dm', 70.104 ],
	[ 23, 'ft', 'm', 7.0104 ],
	[ 23, 'ft', 'km', 0.00701 ],
	[ 23, 'ft', 'mi', 0.004356 ],
	[ 23, 'ft', 'nmi', 0.003785 ],
	[ 23, 'ft', 'yd', 7.666667 ],
	[ 23, 'ft', 'ft', 23 ],
	[ 23, 'ft', 'in', 276 ],
	[ 23, 'ft', 'ft-us', 23 ],

	// Inches
	[ 23, 'in', 'mm', 584.2 ],
	[ 23, 'in', 'cm', 58.42 ],
	[ 23, 'in', 'dm', 5.842 ],
	[ 23, 'in', 'm', 0.5842 ],
	[ 23, 'in', 'km', 0.000584 ],
	[ 23, 'in', 'mi', 0.000363 ],
	[ 23, 'in', 'nmi', 0.000315 ],
	[ 23, 'in', 'yd', 0.638889 ],
	[ 23, 'in', 'ft', 1.916667 ],
	[ 23, 'in', 'in', 23 ],
	[ 23, 'in', 'ft-us', 1.916667 ],

	// Feet (US)
	[ 23, 'ft-us', 'mm', 7010.4 ],
	[ 23, 'ft-us', 'cm', 701.04 ],
	[ 23, 'ft-us', 'dm', 70.104 ],
	[ 23, 'ft-us', 'm', 7.0104 ],
	[ 23, 'ft-us', 'km', 0.00701 ],
	[ 23, 'ft-us', 'mi', 0.004356 ],
	[ 23, 'ft-us', 'nmi', 0.003785 ],
	[ 23, 'ft-us', 'yd', 7.666667 ],
	[ 23, 'ft-us', 'ft', 23 ],
	[ 23, 'ft-us', 'in', 276 ],
	[ 23, 'ft-us', 'ft-us', 23 ],
];

describe( 'Convert length', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to, precision: 6 } ) ).toBe( output );
	} );
} );
