export const formatResult = ( result: number ) => {
	return Number.isInteger( result ) ? result : Number( result.toFixed( 4 ) );
};
