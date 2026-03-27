import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
export default function Save() {
	const blocksProps = useBlockProps.save();
	const { children } = useInnerBlocksProps.save(blocksProps);

	return children;
}
