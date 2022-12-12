import { format } from '../format';

const metersToInches = ( meters: number ): number => {
	return format( meters / 0.0254 );
};

export default metersToInches;
