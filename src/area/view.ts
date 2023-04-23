import convert from './utils/convert';

document.addEventListener( 'DOMContentLoaded', function () {
	const block = document.querySelector< HTMLDivElement >( '.wp-block-smntcs-area-converter' );
	const form = block.querySelector< HTMLFormElement >( 'form' );
	const output = block.querySelector< HTMLDivElement >( '#area-output' );

	const render = () => {
		const input = block.querySelector< HTMLInputElement >( '#area-input' ).value || '0';
		const from = block.querySelector< HTMLSelectElement >( '#area-from' ).value;
		const to = block.querySelector< HTMLSelectElement >( '#area-to' ).value;
		const result = convert( { input: parseInt( input ), from, to } );

		output.innerHTML = `${ input } ${ from } = ${ result } ${ to }`;
	};

	form.addEventListener( 'change', render );
	form.addEventListener( 'input', render );
} );
