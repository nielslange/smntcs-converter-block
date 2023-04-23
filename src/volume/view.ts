import convert from './utils/convert';

document.addEventListener( 'DOMContentLoaded', function () {
	const block = document.querySelector< HTMLDivElement >( '.wp-block-smntcs-volume-converter' );
	const form = block.querySelector< HTMLFormElement >( 'form' );
	const output = block.querySelector< HTMLDivElement >( '#volume-output' );

	const render = () => {
		const input = block.querySelector< HTMLInputElement >( '#volume-input' ).value || '0';
		const from = block.querySelector< HTMLSelectElement >( '#volume-from' ).value;
		const to = block.querySelector< HTMLSelectElement >( '#volume-to' ).value;
		const result = convert( { input: parseInt( input ), from, to } );

		output.innerHTML = `${ input } ${ from } = ${ result } ${ to }`;
	};

	form.addEventListener( 'change', render );
	form.addEventListener( 'input', render );
} );
