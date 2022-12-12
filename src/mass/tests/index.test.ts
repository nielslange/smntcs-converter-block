import convert from '../utils/convert';

const cases = [
	[ 23, 'µg', 'kg', 2.3e-8 ],
	[ 23, 'mg', 'kg', 2.3e-5 ],
	[ 23, 'g', 'kg', 0.023 ],
	[ 23, 'kg', 'kg', 23 ],
	[ 23, 'oz', 'kg', 0.65205 ],
	[ 23, 'lb', 'kg', 10.43257 ],
	[ 23, 't', 'kg', 20865.232 ],
	[ 23, 'mt', 'kg', 23000 ],
];

describe( 'Convert temperature', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to } ) ).toBe( output );
	} );
} );
