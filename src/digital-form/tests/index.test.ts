import convert from '../utils/convert';

const cases = [
	// Bit (b)
	[ 1, 'b', 'b', 1 ],
	[ 1, 'b', 'kb', 1e-3 ],
	[ 1, 'b', 'mb', 1e-6 ],
	[ 1, 'b', 'gb', 1e-9 ],
	[ 1, 'b', 'tb', 1e-12 ],
	[ 1, 'b', 'B', 1.25e-1 ],
	[ 1, 'b', 'kB', 1.25e-4 ],
	[ 1, 'b', 'MB', 1.25e-7 ],
	[ 1, 'b', 'GB', 1.25e-10 ],
	[ 1, 'b', 'TB', 1.25e-13 ],

	// Kilobit (kb)
	[ 1, 'kb', 'b', 1e3 ],
	[ 1, 'kb', 'kb', 1 ],
	[ 1, 'kb', 'mb', 1e-3 ],
	[ 1, 'kb', 'gb', 1e-6 ],
	[ 1, 'kb', 'tb', 1e-9 ],
	[ 1, 'kb', 'B', 1.25e2 ],
	[ 1, 'kb', 'kB', 1.25e-1 ],
	[ 1, 'kb', 'MB', 1.25e-4 ],
	[ 1, 'kb', 'GB', 1.25e-7 ],
	[ 1, 'kb', 'TB', 1.25e-10 ],

	// Megabit (Mb)
	[ 1, 'mb', 'b', 1e6 ],
	[ 1, 'mb', 'kb', 1e3 ],
	[ 1, 'mb', 'mb', 1 ],
	[ 1, 'mb', 'gb', 1e-3 ],
	[ 1, 'mb', 'tb', 1e-6 ],
	[ 1, 'mb', 'B', 1.25e5 ],
	[ 1, 'mb', 'kB', 1.25e2 ],
	[ 1, 'mb', 'MB', 1.25e-1 ],
	[ 1, 'mb', 'GB', 1.25e-4 ],
	[ 1, 'mb', 'TB', 1.25e-7 ],

	// Gigabit (Gb)
	[ 1, 'gb', 'b', 1e9 ],
	[ 1, 'gb', 'kb', 1e6 ],
	[ 1, 'gb', 'mb', 1e3 ],
	[ 1, 'gb', 'gb', 1 ],
	[ 1, 'gb', 'tb', 1e-3 ],
	[ 1, 'gb', 'B', 1.25e8 ],
	[ 1, 'gb', 'kB', 1.25e5 ],
	[ 1, 'gb', 'MB', 1.25e2 ],
	[ 1, 'gb', 'GB', 1.25e-1 ],
	[ 1, 'gb', 'TB', 1.25e-4 ],

	// Terabit (Tb)
	[ 1, 'tb', 'b', 1e12 ],
	[ 1, 'tb', 'kb', 1e9 ],
	[ 1, 'tb', 'mb', 1e6 ],
	[ 1, 'tb', 'gb', 1e3 ],
	[ 1, 'tb', 'tb', 1 ],
	[ 1, 'tb', 'B', 1.25e11 ],
	[ 1, 'tb', 'kB', 1.25e8 ],
	[ 1, 'tb', 'MB', 1.25e5 ],
	[ 1, 'tb', 'GB', 1.25e2 ],
	[ 1, 'tb', 'TB', 1.25e-1 ],

	// Byte (B)
	[ 1, 'B', 'b', 8 ],
	[ 1, 'B', 'kb', 8e-3 ],
	[ 1, 'B', 'mb', 8e-6 ],
	[ 1, 'B', 'gb', 8e-9 ],
	[ 1, 'B', 'tb', 8e-12 ],
	[ 1, 'B', 'B', 1 ],
	[ 1, 'B', 'kB', 1e-3 ],
	[ 1, 'B', 'MB', 1e-6 ],
	[ 1, 'B', 'GB', 1e-9 ],
	[ 1, 'B', 'TB', 1e-12 ],

	// Kilobyte (kB)
	[ 1, 'kB', 'b', 8e3 ],
	[ 1, 'kB', 'kb', 8 ],
	[ 1, 'kB', 'mb', 8e-3 ],
	[ 1, 'kB', 'gb', 8e-6 ],
	[ 1, 'kB', 'tb', 8e-9 ],
	[ 1, 'kB', 'B', 1e3 ],
	[ 1, 'kB', 'kB', 1 ],
	[ 1, 'kB', 'MB', 1e-3 ],
	[ 1, 'kB', 'GB', 1e-6 ],
	[ 1, 'kB', 'TB', 1e-9 ],

	// Megabyte (MB)
	[ 1, 'MB', 'b', 8e6 ],
	[ 1, 'MB', 'kb', 8e3 ],
	[ 1, 'MB', 'mb', 8 ],
	[ 1, 'MB', 'gb', 8e-3 ],
	[ 1, 'MB', 'tb', 8e-6 ],
	[ 1, 'MB', 'B', 1e6 ],
	[ 1, 'MB', 'kB', 1e3 ],
	[ 1, 'MB', 'MB', 1 ],
	[ 1, 'MB', 'GB', 1e-3 ],
	[ 1, 'MB', 'TB', 1e-6 ],

	// Gigabyte (GB)
	[ 1, 'GB', 'b', 8e9 ],
	[ 1, 'GB', 'kb', 8e6 ],
	[ 1, 'GB', 'mb', 8e3 ],
	[ 1, 'GB', 'gb', 8 ],
	[ 1, 'GB', 'tb', 8e-3 ],
	[ 1, 'GB', 'B', 1e9 ],
	[ 1, 'GB', 'kB', 1e6 ],
	[ 1, 'GB', 'MB', 1e3 ],
	[ 1, 'GB', 'GB', 1 ],
	[ 1, 'GB', 'TB', 1e-3 ],

	// Terabyte (TB)
	[ 1, 'TB', 'b', 8e12 ],
	[ 1, 'TB', 'kb', 8e9 ],
	[ 1, 'TB', 'mb', 8e6 ],
	[ 1, 'TB', 'gb', 8e3 ],
	[ 1, 'TB', 'tb', 8 ],
	[ 1, 'TB', 'B', 1e12 ],
	[ 1, 'TB', 'kB', 1e9 ],
	[ 1, 'TB', 'MB', 1e6 ],
	[ 1, 'TB', 'GB', 1e3 ],
	[ 1, 'TB', 'TB', 1 ],
];

describe( 'Digital temperature', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to, precision: 20 } ) ).toBe( output );
	} );
} );
