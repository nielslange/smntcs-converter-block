import convert from '../utils/convert';

const cases = [
	// Square Millimeters (mm²)
	[ 23, 'mm²', 'mm²', 23 ],
	[ 23, 'mm²', 'cm²', 0.23 ],
	[ 23, 'mm²', 'dm²', 0.0023 ],
	[ 23, 'mm²', 'm²', 2.3e-5 ],
	[ 23, 'mm²', 'km²', 0 ],
	[ 23, 'mm²', 'in²', 0.03565 ],
	[ 23, 'mm²', 'ft²', 0.000248 ],
	[ 23, 'mm²', 'yd²', 0.000028 ],
	[ 23, 'mm²', 'mi²', 0 ],
	[ 23, 'mm²', 'ha', 0 ],
	[ 23, 'mm²', 'ac', 0 ],

	// // Square Centimeters (cm²)
	[ 23, 'cm²', 'mm²', 2300 ],
	[ 23, 'cm²', 'cm²', 23 ],
	[ 23, 'cm²', 'dm²', 0.23 ],
	[ 23, 'cm²', 'm²', 0.0023 ],
	[ 23, 'cm²', 'km²', 0 ],
	[ 23, 'cm²', 'in²', 3.565 ],
	[ 23, 'cm²', 'ft²', 0.024757 ],
	[ 23, 'cm²', 'yd²', 0.002751 ],
	[ 23, 'cm²', 'mi²', 0 ],
	[ 23, 'cm²', 'ha', 0 ],
	[ 23, 'cm²', 'ac', 0.000001 ],

	// // Square Decimeters (dm²)
	[ 23, 'dm²', 'mm²', 230000 ],
	[ 23, 'dm²', 'cm²', 2300 ],
	[ 23, 'dm²', 'dm²', 23 ],
	[ 23, 'dm²', 'm²', 0.23 ],
	[ 23, 'dm²', 'km²', 0 ],
	[ 23, 'dm²', 'in²', 356.5 ],
	[ 23, 'dm²', 'ft²', 2.475697 ],
	[ 23, 'dm²', 'yd²', 0.275078 ],
	[ 23, 'dm²', 'mi²', 0 ],
	[ 23, 'dm²', 'ha', 0.000023 ],
	[ 23, 'dm²', 'ac', 0.000057 ],

	// // Square Meters (m²)
	[ 23, 'm²', 'mm²', 2.3e7 ],
	[ 23, 'm²', 'cm²', 230000 ],
	[ 23, 'm²', 'dm²', 2300 ],
	[ 23, 'm²', 'm²', 23 ],
	[ 23, 'm²', 'km²', 2.3e-5 ],
	[ 23, 'm²', 'in²', 35650 ],
	[ 23, 'm²', 'ft²', 247.5697 ],
	[ 23, 'm²', 'yd²', 27.507771 ],
	[ 23, 'm²', 'mi²', 0.000009 ],
	[ 23, 'm²', 'ha', 0.0023 ],
	[ 23, 'm²', 'ac', 0.005683 ],

	// // Square Kilometers (km²)
	[ 23, 'km²', 'mm²', 2.3e13 ],
	[ 23, 'km²', 'cm²', 2.3e11 ],
	[ 23, 'km²', 'dm²', 2.3e9 ],
	[ 23, 'km²', 'm²', 2.3e7 ],
	[ 23, 'km²', 'km²', 23 ],
	[ 23, 'km²', 'in²', 3.565e10 ],
	[ 23, 'km²', 'ft²', 2.475697e8 ],
	[ 23, 'km²', 'yd²', 27507771.064925 ],
	[ 23, 'km²', 'mi²', 8.88035 ],
	[ 23, 'km²', 'ha', 2300 ],
	[ 23, 'km²', 'ac', 5683.423774 ],

	// // Square Inches (in²)
	[ 23, 'in²', 'mm²', 14838.709677 ],
	[ 23, 'in²', 'cm²', 148.387097 ],
	[ 23, 'in²', 'dm²', 1.483871 ],
	[ 23, 'in²', 'm²', 0.014839 ],
	[ 23, 'in²', 'km²', 0 ],
	[ 23, 'in²', 'in²', 23 ],
	[ 23, 'in²', 'ft²', 0.159722 ],
	[ 23, 'in²', 'yd²', 0.017747 ],
	[ 23, 'in²', 'mi²', 0 ],
	[ 23, 'in²', 'ha', 0.000001 ],
	[ 23, 'in²', 'ac', 0.000004 ],

	// // Square Feet (ft²)
	[ 23, 'ft²', 'mm²', 2136752.136752 ],
	[ 23, 'ft²', 'cm²', 21367.521368 ],
	[ 23, 'ft²', 'dm²', 213.675214 ],
	[ 23, 'ft²', 'm²', 2.136752 ],
	[ 23, 'ft²', 'km²', 0.000002 ],
	[ 23, 'ft²', 'in²', 3311.965812 ],
	[ 23, 'ft²', 'ft²', 23 ],
	[ 23, 'ft²', 'yd²', 2.555534 ],
	[ 23, 'ft²', 'mi²', 0.000001 ],
	[ 23, 'ft²', 'ha', 0.000214 ],
	[ 23, 'ft²', 'ac', 0.000528 ],

	// // Square Yards (yd²)
	[ 23, 'yd²', 'mm²', 19230930.024499 ],
	[ 23, 'yd²', 'cm²', 192309.300245 ],
	[ 23, 'yd²', 'dm²', 1923.093002 ],
	[ 23, 'yd²', 'm²', 19.23093 ],
	[ 23, 'yd²', 'km²', 0.000019 ],
	[ 23, 'yd²', 'in²', 29807.941538 ],
	[ 23, 'yd²', 'ft²', 206.999808 ],
	[ 23, 'yd²', 'yd²', 23 ],
	[ 23, 'yd²', 'mi²', 0.000007 ],
	[ 23, 'yd²', 'ha', 0.001923 ],
	[ 23, 'yd²', 'ac', 0.004752 ],

	// // Square Miles (mi²)
	[ 23, 'mi²', 'mm²', 59569726537728.01 ],
	[ 23, 'mi²', 'cm²', 595697265377.28 ],
	[ 23, 'mi²', 'dm²', 5956972653.7728 ],
	[ 23, 'mi²', 'm²', 59569726.537728 ],
	[ 23, 'mi²', 'km²', 59.569727 ],
	[ 23, 'mi²', 'in²', 92333076133.47841 ],
	[ 23, 'mi²', 'ft²', 641202579.47945 ],
	[ 23, 'mi²', 'yd²', 71244800 ],
	[ 23, 'mi²', 'mi²', 23 ],
	[ 23, 'mi²', 'ha', 5956.972654 ],
	[ 23, 'mi²', 'ac', 14720 ],

	// // Hectares (ha)
	[ 23, 'ha', 'mm²', 2.3e11 ],
	[ 23, 'ha', 'cm²', 2.3e9 ],
	[ 23, 'ha', 'dm²', 2.3e7 ],
	[ 23, 'ha', 'm²', 230000 ],
	[ 23, 'ha', 'km²', 0.23 ],
	[ 23, 'ha', 'in²', 3.565e8 ],
	[ 23, 'ha', 'ft²', 2475697 ],
	[ 23, 'ha', 'yd²', 275077.710649 ],
	[ 23, 'ha', 'mi²', 0.088803 ],
	[ 23, 'ha', 'ha', 23 ],
	[ 23, 'ha', 'ac', 56.834238 ],

	// // Acres (ac)
	[ 23, 'ac', 'mm²', 93077697715.2 ],
	[ 23, 'ac', 'cm²', 930776977.152 ],
	[ 23, 'ac', 'dm²', 9307769.77152 ],
	[ 23, 'ac', 'm²', 93077.697715 ],
	[ 23, 'ac', 'km²', 0.093078 ],
	[ 23, 'ac', 'in²', 144270431.45856 ],
	[ 23, 'ac', 'ft²', 1001879.030437 ],
	[ 23, 'ac', 'yd²', 111320 ],
	[ 23, 'ac', 'mi²', 0.035937 ],
	[ 23, 'ac', 'ha', 9.30777 ],
	[ 23, 'ac', 'ac', 23 ],
];

describe( 'Convert area', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to } ) ).toBe( output );
	} );
} );