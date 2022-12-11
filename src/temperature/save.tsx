import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{"SMNTCS Converter Block – hello from the saved content!"}
		</p>
	);
}
