import convert from './utils/convert';

document.addEventListener( 'DOMContentLoaded', function () {
	const block = document.querySelector< HTMLDivElement >( '.wp-block-smntcs-digital-converter' );
	const form = block.querySelector< HTMLFormElement >( 'form' );
	const output = block.querySelector< HTMLDivElement >( '#digital-output' );

	const render = () => {
		const input = block.querySelector< HTMLInputElement >( '#digital-input' ).value || '0';
		const from = block.querySelector< HTMLSelectElement >( '#digital-from' ).value;
		const to = block.querySelector< HTMLSelectElement >( '#digital-to' ).value;
		const result = convert( { input: parseInt( input ), from, to, precision: 12 } );

		output.innerHTML = `${ input } ${ from } = ${ result } ${ to }`;
	};

	form.addEventListener( 'change', render );
	form.addEventListener( 'input', render );
} );
