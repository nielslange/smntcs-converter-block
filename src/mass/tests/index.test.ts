import convert from '../utils/convert';

const cases = [
	// Micrograms
	[ 23, 'µg', 'mg', 2.3e-2 ],
	[ 23, 'µg', 'g', 2.3e-5 ],
	[ 23, 'µg', 'kg', 2.3e-8 ],
	[ 23, 'µg', 'oz', 8.113e-7 ],
	[ 23, 'µg', 'lb', 5.07e-8 ],
	[ 23, 'µg', 't', 0 ],
	[ 23, 'µg', 'mt', 0 ],

	// Milligrams
	[ 23, 'mg', 'g', 2.3e-2 ],
	[ 23, 'mg', 'kg', 2.3e-5 ],
	[ 23, 'mg', 'oz', 8.112875e-4 ],
	[ 23, 'mg', 'lb', 5.07066e-5 ],
	[ 23, 'mg', 't', 2.54e-8 ],
	[ 23, 'mg', 'mt', 2.3e-8 ],

	// Grams
	[ 23, 'g', 'µg', 23000000 ],
	[ 23, 'g', 'mg', 23000 ],
	[ 23, 'g', 'kg', 2.3e-2 ],
	[ 23, 'g', 'oz', 0.811287478 ],
	[ 23, 'g', 'lb', 5.07065852e-2 ],
	[ 23, 'g', 't', 2.53532e-5 ],
	[ 23, 'g', 'mt', 2.3e-5 ],

	// Kilograms
	[ 23, 'kg', 'kg', 23 ],

	// Ounces
	[ 23, 'oz', 'kg', 0.65205 ],

	// Pounds
	[ 23, 'lb', 'kg', 10.43257 ],

	// Tons
	[ 23, 't', 'kg', 20865.232 ],

	// Metric tons
	[ 23, 'mt', 'kg', 23000 ],
];

describe( 'Convert temperature', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to } ) ).toBe( output );
	} );
} );
