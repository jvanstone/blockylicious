import { useImage } from "../hooks/useImage";

export const ImageThumbnail = (props) => {
	const image = useImage(props.imageId);

	return image?.source_url ? (
		<img
			style={{ height: props.height || 150, pointerEvents: "all" }}
			className={`piccy-image ${props.className ?? ""}`}
			onClick={props.onClick}
			src={image.source_url}
		/>
	) : null;
};
