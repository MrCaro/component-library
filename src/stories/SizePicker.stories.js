import { fn } from "storybook/test";

import { SizePicker } from "./SizePicker";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "ECommerce/Size Picker",
	component: SizePicker,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component:
					"A color picker component that allows users to select from a range of color options. Each color option is represented by a circular swatch, and out-of-stock colors are visually indicated with a strike-through. The component is designed to be intuitive and user-friendly, making it easy for users to choose their preferred color.",
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InStock = {
	args: {
		options: [
			{
				size: "XS",
				inStock: true,
				checked: true,
			},
			{
				size: "S",
				inStock: true,
				checked: false,
			},
			{
				size: "M",
				inStock: true,
				checked: false,
			},
			{
				size: "L",
				inStock: true,
				checked: false,
			},
			{
				size: "XL",
				inStock: true,
				checked: false,
			},
		],
	},
};

export const OutStock = {
	args: {
		options: [
			{
				size: "XS",
				inStock: true,
				checked: true,
			},
			{
				size: "S",
				inStock: true,
				checked: false,
			},
			{
				size: "M",
				inStock: false,
				checked: false,
			},
			{
				size: "L",
				inStock: true,
				checked: false,
			},
			{
				size: "XL",
				inStock: false,
				checked: false,
			},
		],
	},
};
