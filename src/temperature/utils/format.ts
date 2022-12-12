export const format = ( result: number ) => {
	return Number.isInteger( result ) ? result : Number( result.toFixed( 1 ) );
};
