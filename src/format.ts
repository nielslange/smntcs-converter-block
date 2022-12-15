export const format = ( result: number, fractionDigits: number = 2 ) => {
	return Number.isInteger( result ) ? result : Number( result.toFixed( fractionDigits ) );
};
