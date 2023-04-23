import convert from '../utils/convert';

const cases = [
	// Bit (b)
	[ 1, 'b', 'b', 1 ],
	[ 1, 'b', 'kb', 1e-3 ],
	[ 1, 'b', 'Mb', 1e-6 ],
	[ 1, 'b', 'Gb', 1e-9 ],
	[ 1, 'b', 'Tb', 1e-12 ],
	[ 1, 'b', 'B', 1.25e-1 ],
	[ 1, 'b', 'kB', 1.25e-4 ],
	[ 1, 'b', 'MB', 1.25e-7 ],
	[ 1, 'b', 'GB', 1.25e-10 ],
	[ 1, 'b', 'TB', 1.25e-13 ],

	// Kilobit (kb)
	[ 1, 'kb', 'b', 1e3 ],
	[ 1, 'kb', 'kb', 1 ],
	[ 1, 'kb', 'Mb', 1e-3 ],
	[ 1, 'kb', 'Gb', 1e-6 ],
	[ 1, 'kb', 'Tb', 1e-9 ],
	[ 1, 'kb', 'B', 1.25e2 ],
	[ 1, 'kb', 'kB', 1.25e-1 ],
	[ 1, 'kb', 'MB', 1.25e-4 ],
	[ 1, 'kb', 'GB', 1.25e-7 ],
	[ 1, 'kb', 'TB', 1.25e-10 ],

	// Megabit (Mb)
	[ 1, 'Mb', 'b', 1e6 ],
	[ 1, 'Mb', 'kb', 1e3 ],
	[ 1, 'Mb', 'Mb', 1 ],
	[ 1, 'Mb', 'Gb', 1e-3 ],
	[ 1, 'Mb', 'Tb', 1e-6 ],
	[ 1, 'Mb', 'B', 1.25e5 ],
	[ 1, 'Mb', 'kB', 1.25e2 ],
	[ 1, 'Mb', 'MB', 1.25e-1 ],
	[ 1, 'Mb', 'GB', 1.25e-4 ],
	[ 1, 'Mb', 'TB', 1.25e-7 ],

	// Gigabit (Gb)
	[ 1, 'Gb', 'b', 1e9 ],
	[ 1, 'Gb', 'kb', 1e6 ],
	[ 1, 'Gb', 'Mb', 1e3 ],
	[ 1, 'Gb', 'Gb', 1 ],
	[ 1, 'Gb', 'Tb', 1e-3 ],
	[ 1, 'Gb', 'B', 1.25e8 ],
	[ 1, 'Gb', 'kB', 1.25e5 ],
	[ 1, 'Gb', 'MB', 1.25e2 ],
	[ 1, 'Gb', 'GB', 1.25e-1 ],
	[ 1, 'Gb', 'TB', 1.25e-4 ],

	// Terabit (Tb)
	[ 1, 'Tb', 'b', 1e12 ],
	[ 1, 'Tb', 'kb', 1e9 ],
	[ 1, 'Tb', 'Mb', 1e6 ],
	[ 1, 'Tb', 'Gb', 1e3 ],
	[ 1, 'Tb', 'Tb', 1 ],
	[ 1, 'Tb', 'B', 1.25e11 ],
	[ 1, 'Tb', 'kB', 1.25e8 ],
	[ 1, 'Tb', 'MB', 1.25e5 ],
	[ 1, 'Tb', 'GB', 1.25e2 ],
	[ 1, 'Tb', 'TB', 1.25e-1 ],

	// Byte (B)
	[ 1, 'B', 'b', 8 ],
	[ 1, 'B', 'kb', 8e-3 ],
	[ 1, 'B', 'Mb', 8e-6 ],
	[ 1, 'B', 'Gb', 8e-9 ],
	[ 1, 'B', 'Tb', 8e-12 ],
	[ 1, 'B', 'B', 1 ],
	[ 1, 'B', 'kB', 1e-3 ],
	[ 1, 'B', 'MB', 1e-6 ],
	[ 1, 'B', 'GB', 1e-9 ],
	[ 1, 'B', 'TB', 1e-12 ],

	// Kilobyte (kB)
	[ 1, 'kB', 'b', 8e3 ],
	[ 1, 'kB', 'kb', 8 ],
	[ 1, 'kB', 'Mb', 8e-3 ],
	[ 1, 'kB', 'Gb', 8e-6 ],
	[ 1, 'kB', 'Tb', 8e-9 ],
	[ 1, 'kB', 'B', 1e3 ],
	[ 1, 'kB', 'kB', 1 ],
	[ 1, 'kB', 'MB', 1e-3 ],
	[ 1, 'kB', 'GB', 1e-6 ],
	[ 1, 'kB', 'TB', 1e-9 ],

	// Megabyte (MB)
	[ 1, 'MB', 'b', 8e6 ],
	[ 1, 'MB', 'kb', 8e3 ],
	[ 1, 'MB', 'Mb', 8 ],
	[ 1, 'MB', 'Gb', 8e-3 ],
	[ 1, 'MB', 'Tb', 8e-6 ],
	[ 1, 'MB', 'B', 1e6 ],
	[ 1, 'MB', 'kB', 1e3 ],
	[ 1, 'MB', 'MB', 1 ],
	[ 1, 'MB', 'GB', 1e-3 ],
	[ 1, 'MB', 'TB', 1e-6 ],

	// Gigabyte (GB)
	[ 1, 'GB', 'b', 8e9 ],
	[ 1, 'GB', 'kb', 8e6 ],
	[ 1, 'GB', 'Mb', 8e3 ],
	[ 1, 'GB', 'Gb', 8 ],
	[ 1, 'GB', 'Tb', 8e-3 ],
	[ 1, 'GB', 'B', 1e9 ],
	[ 1, 'GB', 'kB', 1e6 ],
	[ 1, 'GB', 'MB', 1e3 ],
	[ 1, 'GB', 'GB', 1 ],
	[ 1, 'GB', 'TB', 1e-3 ],

	// Terabyte (TB)
	[ 1, 'TB', 'b', 8e12 ],
	[ 1, 'TB', 'kb', 8e9 ],
	[ 1, 'TB', 'Mb', 8e6 ],
	[ 1, 'TB', 'Gb', 8e3 ],
	[ 1, 'TB', 'Tb', 8 ],
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
