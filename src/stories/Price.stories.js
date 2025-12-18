import { fn } from "storybook/test";

import { Price } from "./Price";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Primitives/Price",
	component: Price,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component:
					"A Price component that displays product pricing information in various formats. It supports multiple sizes (small, medium, large) and currencies (USD, EUR, GBP). The component is designed to be flexible and easily integrated into e-commerce applications, providing clear and concise pricing details to users.",
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
	args: { onClick: fn(), currency: "USD", size: "lg" },
	argTypes: {
		currency: {
			control: { type: "select" },
			options: ["USD", "EUR", "GBP"],
		},
		size: {
			control: { type: "select" },
			options: ["lg", "md", "sm"],
		},
	},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large = {
	args: {
		size: "lg",
		price: 40,
	},
};

export const Medium = {
	args: {
		size: "md",
		price: 40,
	},
};

export const Small = {
	args: {
		size: "sm",
		price: 40,
	},
};
