import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";

import { __ } from "@wordpress/i18n";
import metadata from "./block.json";
import "./editor.scss";
import { Icon } from "@wordpress/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPanorama } from "@fortawesome/free-solid-svg-icons/faPanorama";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ImageThumbnail } from "../../components/imageThumbnail";
import { useImage } from "../../hooks/useImage";
config.autoAddCss = false;

export default function Edit(props) {
	const blockProps = useBlockProps();
	const image = useImage(props.attributes.imageId);

	const imageSelected = !!props.attributes.imageId && !!image?.source_url;
	return (
		<>
			<div {...blockProps}>
				<MediaUploadCheck>
					{!!imageSelected && (
						<ImageThumbnail imageId={props.attributes.imageId} />
					)}
					{!imageSelected && (
						<div className="blank-image">
							{/* 	<Icon
								icon="format-image"
								style={{ margin: "auto", color: "black" }}
							/> */}
							<FontAwesomeIcon
								icon={faPanorama}
								style={{ margin: "auto", color: "black" }}
							/>
						</div>
					)}
					<MediaUpload
						value={props.attributes.imageId}
						allowedTypes={["image"]}
						render={({ open }) => {
							return (
								<button className="media-select" onClick={open}>
									{imageSelected
										? __("Replace Image", metadata.textdomain)
										: __("Select an image", metadata.textdomain)}
								</button>
							);
						}}
						onSelect={(item) => {
							props.setAttributes({
								imageId: item.id,
							});
						}}
					/>
				</MediaUploadCheck>
			</div>
		</>
	);
}
