import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";

import { SelectControl, PanelBody } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
export default function Edit(props) {
	const postTypes = useSelect((select) => {
		const data = select("core").getEntityRecords("root", "postType", {
			per_page: -1,
		});
		return data?.filter(
			(item) => item.visibility.show_in_nav_menus && item.visibility.show_ui,
		);
	});
	const posts = useSelect(
		(select) => {
			const data = select("core").getEntityRecords(
				"postType",
				props.attributes.postType,
				{
					per_page: -1,
				},
			);

			return data;
		},
		[props.attributes.postType],
	);
	const blockProps = useBlockProps();
	console.log(postTypes);
	console.log(posts);
	return (
		<>
			<InspectorControls>
				<PanelBody title="Destination">
					<SelectControl
						value={props.attributes.postType}
						onChange={(newPostType) => {
							props.setAttributes({
								postType: newPostType,
							});
						}}
						label="Type"
						options={[
							{
								label: "Select a post type..",
								value: "",
							},
							...(postTypes || []).map((postType) => ({
								label: postType.labels.singular_name,
								value: postType.slug,
							})),
						]}
					/>
					{!!props.attributes.postType && (
						<SelectControl
							value={props.attributes.linkPost}
							onChange={(newLinkPost) => {
								props.setAttributes({
									linkPost: newLinkPost ? parseInt(newLinkPost) : null,
								});
							}}
							label={`Linked ${props.attributes.postType}`}
							options={[
								{
									label: `Select a  ${props.attributes.postType} to link to`,
									value: "",
								},
								...(posts || []).map((post) => ({
									label: post.title.rendered,
									value: post.id,
								})),
							]}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<RichText
					placeholder="Label text"
					value={props.attributes.labelText}
					allowedFormats={[]}
					multiline={false}
					onSplit={() => {}}
					onReplace={() => {}}
					onChange={(newValue) => {
						props.setAttributes({
							labelText: newValue,
						});
					}}
				/>
			</div>
		</>
	);
}
