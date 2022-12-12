import convert from './utils/convert';

document.addEventListener( 'DOMContentLoaded', function () {
	const block = document.querySelector< HTMLDivElement >( '.wp-block-smntcs-length-converter' );
	const form = block.querySelector< HTMLFormElement >( 'form' );
	let output = block.querySelector< HTMLDivElement >( '#length-output' );

	const render = () => {
		const input = block.querySelector< HTMLInputElement >( '#length-input' ).value || '0';
		const from = block.querySelector< HTMLSelectElement >( '#length-from' ).value;
		const to = block.querySelector< HTMLSelectElement >( '#length-to' ).value;
		const result = convert( { input: parseInt( input ), from, to } );

		output.innerHTML = `${ input } ${ from } = ${ result } ${ to }`;
	};

	form.addEventListener( 'change', render );
	form.addEventListener( 'input', render );
} );
