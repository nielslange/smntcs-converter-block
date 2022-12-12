import convert from '../utils/convert';

const cases = [
	[ 23, 'm', 'mm', 23000 ],
	[ 23, 'm', 'cm', 2300 ],
	[ 23, 'm', 'dm', 230 ],
	[ 23, 'm', 'km', 0.023 ],
	[ 23, 'm', 'mi', 0.0143 ],
	[ 23, 'm', 'nmi', 0.0124 ],
	[ 23, 'm', 'yd', 25.1531 ],
	[ 23, 'm', 'ft', 75.4593 ],
	[ 23, 'm', 'in', 905.5118 ],
	[ 23, 'm', 'ft-us', 75.4593 ],
];

describe( 'Convert length', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to } ) ).toBe( output );
	} );
} );
