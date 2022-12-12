import convert from './utils/convert';

document.addEventListener( 'DOMContentLoaded', function () {
	const block = document.querySelector< HTMLDivElement >( '.wp-block-smntcs-temperature-converter' );
	const form = block.querySelector< HTMLFormElement >( 'form' );
	let output = block.querySelector< HTMLDivElement >( '#temperature-output' );

	const render = () => {
		const input = block.querySelector< HTMLInputElement >( '#temperature-input' ).value || '0';
		const from = block.querySelector< HTMLSelectElement >( '#temperature-from' ).value;
		const to = block.querySelector< HTMLSelectElement >( '#temperature-to' ).value;
		const result = convert( { input: parseInt( input ), from, to } );

		output.innerHTML = `${ input } ${ from } = ${ result } ${ to }`;
	};

	form.addEventListener( 'change', render );
} );
