import { RichTextToolbarButton } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
	applyFormat,
	registerFormatType,
	removeFormat,
} from "@wordpress/rich-text";
import "./style.scss";
import { useState } from "@wordpress/element";
import { Popover, ColorPalette, PanelBody } from "@wordpress/components";

import { useSetting } from "@wordpress/block-editor";

import lowHighlightIcon from "./assets/low-highlight.svg";
import lowHighlightActive from "./assets/low-highlight-active.svg";

registerFormatType("blockylicious/low-highlight", {
	title: __("Low Highlight", "blockylicious"),
	tagName: "span",
	className: "blockylicious-low-highlight",
	attributes: {
		style: "style", // ✅ tell WordPress to allow the style attribute
	},
	edit: ({ onChange, value, contentRef, isActive }) => {
		const colors = useSetting("color.palette");

		const [showColors, setShowColors] = useState(false);
		const lowHighlight = value.activeFormats?.find(
			(format) => format.type === "blockylicious/low-highlight",
		);

		const attributes = {
			...(lowHighlight?.attributes || {}),
			...(lowHighlight?.unregisteredAttributes || {}),
		};

		return (
			<>
				<RichTextToolbarButton
					title={__("Low Highlight", "blockylicious")}
					icon={
						<img
							height={24}
							width={24}
							src={isActive ? lowHighlightActive : lowHighlightIcon}
						/>
					}
					onClick={() => {
						setShowColors(true);
					}}
				/>
				{!!showColors && (
					<Popover
						anchor={contentRef?.current}
						onClose={() => {
							setShowColors(false);
						}}
					>
						<PanelBody>
							<ColorPalette
								colors={colors}
								value={attributes?.["data-color"]}
								onChange={(color) => {
									if (color) {
										onChange(
											applyFormat(value, {
												type: "blockylicious/low-highlight",
												attributes: {
													"data-color": color,
													style: `background-image: linear-gradient(to right, ${color}, ${color})`,
												},
											}),
										);
									} else {
										onChange(
											removeFormat(value, "blockylicious/low-highlight"),
										);
									}
								}}
							/>
						</PanelBody>
					</Popover>
				)}
			</>
		);
	},
});
