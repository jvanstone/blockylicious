import {
	HorizontalRule,
	ToggleControl,
	RangeControl,
} from "@wordpress/components";

import { ColorPalette } from "@wordpress/block-editor";
import metadata from "../block.json";

import { __ } from "@wordpress/i18n";
export const TopCurveSettings = (props) => {
	return (
		<>
			<HorizontalRule />
			<RangeControl
				label={__("Width", metadata.textdomain)}
				min={100}
				max={300}
				value={props.attributes.topWidth || 100}
				onChange={(newValue) => {
					props.setAttributes({
						topWidth: parseInt(newValue),
					});
				}}
			/>
			<RangeControl
				label={__("Height", metadata.textdomain)}
				min={0}
				max={200}
				value={props.attributes.topHeight}
				onChange={(newValue) => {
					props.setAttributes({
						topHeight: parseInt(newValue),
					});
				}}
			/>
			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.topFlipX}
					onChange={(isChecked) => {
						props.setAttributes({ topFlipX: isChecked });
					}}
				/>
				<span>{__("Flip Horizontally", metadata.textdomain)}</span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.topFlipY}
					onChange={(isChecked) => {
						props.setAttributes({ topFlipY: isChecked });
					}}
				/>
				<span>{__("Flip Vertically", metadata.textdomain)}</span>
			</div>
			<HorizontalRule />
			<div>
				<label>{__("Curve Colour", metadata.textdomain)}</label>
				<ColorPalette
					value={props.attributes.topColor}
					onChange={(color) => {
						props.setAttributes({ topColor: color });
					}}
				/>
			</div>
		</>
	);
};
