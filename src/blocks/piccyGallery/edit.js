import {
	useBlockProps,
	BlockControls,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { ToolbarGroup, ToolbarButton, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import metadata from "./block.json";
import { useState } from "@wordpress/element";
import "./editor.scss";
import "./style.scss";
import { ImageThumbnail } from "../../components/imageThumbnail";

export default function Edit(props) {
	const blockProps = useBlockProps();
	const [editMode, setEditeMode] = useState(true);
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "piccy-gallery-inner-blocks",
		},
		{
			allowedBlocks: ["blockylicious/piccy-image"],
		},
	);

	const innerBlocks = useSelect(
		(select) => {
			const { getBlocksByClientId } = select("core/block-editor");
			const block = getBlocksByClientId(props.clientId)?.[0];
			return block?.innerBlocks;
		},
		[props.clientId],
	);
	const [previewModeImage, setPreviewModeImage] = useState({
		imageId: innerBlocks?.[0]?.attributes?.imageId,
		blockId: innerBlocks?.[0]?.clientId,
	});

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={
							editMode ? (
								<Icon icon="welcome-view-site" />
							) : (
								<Icon icon="edit" />
							)
						}
						label={
							editMode
								? __("Preview Gallery", metadata.textdomain)
								: __("Edit Gallery", metadata.textdomian)
						}
						onClick={() => {
							setEditeMode((prevState) => !prevState);
						}}
					/>
				</ToolbarGroup>
			</BlockControls>
			<div {...blockProps}>
				{!!editMode && (
					<div className="edit-mode">
						<span className="edit-mode__label">
							{__("Piccy Image Gallery", metadata.textdomain)}
						</span>

						<div {...innerBlocksProps} />
					</div>
				)}
				{!editMode && (
					<>
						<div className="preview-mode">
							{(innerBlocks || []).map((innerBlock) => (
								<ImageThumbnail
									className={`thumbnail ${
										innerBlock.clientId === previewModeImage.blockId
											? "selected"
											: ""
									}`}
									key={innerBlock.clientId}
									imageId={innerBlock.attributes.imageId}
									height={75}
									onClick={() => {
										setPreviewModeImage({
											imageId: innerBlock.attributes.imageId,
											blockId: innerBlock.clientId,
										});
									}}
								/>
							))}
						</div>
						<div>
							<ImageThumbnail
								height="initial"
								width="100%"
								imageId={previewModeImage?.imageId}
							/>
						</div>
					</>
				)}
			</div>
		</>
	);
}
