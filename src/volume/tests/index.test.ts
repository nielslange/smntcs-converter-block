import convert from '../utils/convert';

const cases = [
	// Cubic Millimeters (mm³)
	[ 23, 'mm³', 'mm³', 23 ],
	[ 23, 'mm³', 'cm³', 2.3e-2 ],
	[ 23, 'mm³', 'dm³', 2.3e-5 ],
	[ 23, 'mm³', 'm³', 2.3e-8 ],
	[ 23, 'mm³', 'km³', 2.3e-17 ],
	// [ 23, 'mm³', 'in³', 0.0014035461141788425 ],
	// [ 23, 'mm³', 'ft³', 8.1223733459424e-7 ],
	// [ 23, 'mm³', 'yd³', 3.00828642439e-8 ],
	// [ 23, 'mm³', 'mi³', 5.52e-18 ],
	// [ 23, 'mm³', 'tsp', 0.0015554450442000001 ],
	// [ 23, 'mm³', 'tbsp', 0.0015554450442000001 ],
	// [ 23, 'mm³', 'fl-oz', 0.0007777225221423659 ],
	// [ 23, 'mm³', 'cup', 0.00009721531440000001 ],
	// [ 23, 'mm³', 'pint', 2.43038e-5 ],
	// [ 23, 'mm³', 'quart', 2.0237e-5 ],
	// [ 23, 'mm³', 'gal', 0 ],
	// [ 23, 'mm³', 'cl', 0.0023 ],
	// [ 23, 'mm³', 'ml', 0.023 ],
	// [ 23, 'mm³', 'dl', 0.00023 ],
	// [ 23, 'mm³', 'l', 0.000023 ],
	// [ 23, 'mm³', 'kl', 2.3e-8 ],
	// [ 23, 'mm³', 'hl', 2.3e-7 ],
	// [ 23, 'mm³', 'tsk', 0.000015 ],
	// [ 23, 'mm³', 'msk', 0.000005 ],
	// [ 23, 'mm³', 'krm', 0.000005 ],
	// [ 23, 'mm³', 'kkp', 0.000008 ],
	// [ 23, 'mm³', 'glas', 0.000008 ],
	// [ 23, 'mm³', 'kanna', 0.000008788689338937716 ],

	// Cubic Centimeters (cm³)
	[ 23, 'cm³', 'mm³', 23e3 ],
	[ 23, 'cm³', 'cm³', 23 ],
	[ 23, 'cm³', 'dm³', 0.023 ],
	[ 23, 'cm³', 'm³', 2.3e-5 ],
	[ 23, 'cm³', 'km³', 2.3e-14 ],

	// Cubic Decimeters (dm³)
	[ 23, 'dm³', 'mm³', 23e6 ],
	[ 23, 'dm³', 'cm³', 23e3 ],
	[ 23, 'dm³', 'dm³', 23 ],
	[ 23, 'dm³', 'm³', 0.023 ],
	[ 23, 'dm³', 'km³', 2.3e-11 ],

	// Cubic Meters (m³)
	[ 23, 'm³', 'mm³', 23e9 ],
	[ 23, 'm³', 'cm³', 23e6 ],
	[ 23, 'm³', 'dm³', 23e3 ],
	[ 23, 'm³', 'm³', 23 ],
	[ 23, 'm³', 'km³', 2.3e-8 ],

	// Cubic Kilometers (km³)
	[ 23, 'km³', 'mm³', 2.3e19 ],
	[ 23, 'km³', 'cm³', 2.3e16 ],
	[ 23, 'km³', 'dm³', 2.3e13 ],
	[ 23, 'km³', 'm³', 2.3e10 ],
	[ 23, 'km³', 'km³', 23 ],

	// Cubic Inches (in³)
	// Cubic Feet (ft³)
	// Cubic Yards (yd³)
	// Cubic Miles (mi³)
	// Teaspoons (tsp)
	// Tablespoons (tbsp)
	// Fluid Ounces (fl oz)
	// Cups (cup)
	// Pints (pint)
	// Quarts (quart)
	// Gallons (gal)
	// Milliliters (ml)
	// Centilitres (cl)
	// Deciliters (dl)
	// Liters (l)
	// Kiloliters (kl)
	// Hectoliters (hl)
	// Teskedar (tsk)
	// Matskedar (msk)
	// Kaffekoppar (kkp)
	// Glas (glas)
	// Kannor (kanna)
];

describe( 'Convert volume', () => {
	test.each( cases )( '%f %s to %s equals %f', ( input: number, from: string, to: string, output: number ) => {
		expect( convert( { input, from, to, precision: 20 } ) ).toBe( output );
	} );
} );
