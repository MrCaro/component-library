import { fn } from "storybook/test";

import { ColorPicker } from "./ColorPicker";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "ECommerce/Color Picker",
	component: ColorPicker,
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
				label: "Black",
				color: "bg-zinc-900 checked:outline-zinc-900 hover:outline-zinc-900",
				inStock: true,
				checked: true,
			},
			{
				label: "Gray",
				color: "bg-zinc-500 checked:outline-zinc-500 hover:outline-zinc-500",
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
				label: "Black",
				color: "bg-zinc-900 checked:outline-zinc-900 hover:outline-zinc-900",
				inStock: true,
				checked: true,
			},
			{
				label: "Gray",
				color: "bg-zinc-500 checked:outline-zinc-500 hover:outline-zinc-500",
				inStock: false,
				checked: false,
			},
		],
	},
};
