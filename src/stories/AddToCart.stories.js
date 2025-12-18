import { fn } from "storybook/test";

import { AddToCart } from "./AddToCart";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Primitives/Add To Cart",
	component: AddToCart,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component:
					"A button component to add items to the shopping cart. It supports multiple sizes (small, medium, large) and variants (primary, secondary) to accommodate various use cases. The button component is fully accessible and follows WCAG guidelines for interactive elements.",
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
	args: { onClick: fn(), size: "lg" },
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["lg", "md", "sm"],
		},
	},
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
