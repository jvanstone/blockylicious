import {
	HorizontalRule,
	ToggleControl,
	RangeControl,
} from "@wordpress/components";

import { ColorPalette } from "@wordpress/block-editor";
import metadata from "../block.json";

import { __ } from "@wordpress/i18n";
export const BottomCurveSettings = (props) => {
	return (
		<>
			<HorizontalRule />
			<RangeControl
				label={__("Width", metadata.textdomain)}
				min={100}
				max={300}
				value={props.attributes.bottomWidth || 100}
				onChange={(newValue) => {
					props.setAttributes({
						bottomWidth: parseInt(newValue),
					});
				}}
			/>
			<RangeControl
				label={__("Height", metadata.textdomain)}
				min={0}
				max={200}
				value={props.attributes.bottomHeight}
				onChange={(newValue) => {
					props.setAttributes({
						bottomHeight: parseInt(newValue),
					});
				}}
			/>
			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.bottomFlipX}
					onChange={(isChecked) => {
						props.setAttributes({ bottomFlipX: isChecked });
					}}
				/>
				<span>{__("Flip Horizontally", metadata.textdomain)}</span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.bottomFlipY}
					onChange={(isChecked) => {
						props.setAttributes({ bottomFlipY: isChecked });
					}}
				/>
				<span>{__("Flip Vertically", metadata.textdomain)}</span>
			</div>
			<HorizontalRule />
			<div>
				<label>{__("Curve Colour", metadata.textdomain)}</label>
				<ColorPalette
					value={props.attributes.bottomColor}
					onChange={(color) => {
						props.setAttributes({ bottomColor: color });
					}}
				/>
			</div>
		</>
	);
};
