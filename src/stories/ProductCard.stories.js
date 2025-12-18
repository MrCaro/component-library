import { fn } from "storybook/test";

import { ProductCard } from "./ProductCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "ECommerce/Product Card",
	component: ProductCard,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component:
					"A comprehensive product card component that displays essential product information, including an image, title, price, and an 'Add to Cart' button. It is designed to be visually appealing and user-friendly, making it easy for customers to browse and select products.",
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
	args: { onClick: fn(), size: "lg", headingLevel: "h1", currency: "USD" },
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["lg", "md", "sm"],
		},
		headingLevel: {
			control: { type: "select" },
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
		},
		currency: {
			control: { type: "select" },
			options: ["USD", "EUR", "GBP"],
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large = {
	args: {
		border: true,
		size: "lg",
		kicker: "SHOES",
		heading: "Air Force 1 '07 LV8",
		headingLevel: "h1",
		aspectVideo: false,
		price: 99.1,
		currency: "USD",
		primary: true,
		label: "Add to Cart",
	},
};

export const Medium = {
	args: {
		border: true,
		size: "md",
		kicker: "SHOES",
		heading: "Air Force 1 '07 LV8",
		headingLevel: "h1",
		aspectVideo: false,
		price: 99.1,
		currency: "USD",
		primary: true,
		label: "Add to Cart",
	},
};

export const Small = {
	args: {
		border: true,
		size: "sm",
		kicker: "SHOES",
		heading: "Air Force 1 '07 LV8",
		headingLevel: "h1",
		aspectVideo: false,
		price: 99.1,
		currency: "USD",
		primary: true,
		label: "Add to Cart",
	},
};
