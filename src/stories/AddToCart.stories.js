import { fn } from "storybook/test";

import { AddToCart } from "./AddToCart";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Primitives/Add To Cart",
	component: AddToCart,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component: "A button component to add items to the shopping cart",
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
	args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
	args: {
		primary: true,
		label: "Add to Cart",
	},
};

export const Secondary = {
	args: {
		label: "Add to Cart",
	},
};

export const Large = {
	args: {
		primary: true,
		size: "lg",
		label: "Add to Cart",
	},
};

export const Medium = {
	args: {
		primary: true,
		size: "md",
		label: "Add to Cart",
	},
};

export const Small = {
	args: {
		primary: true,
		size: "sm",
		label: "Add to Cart",
	},
};
