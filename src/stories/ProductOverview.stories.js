import { fn } from "storybook/test";

import { ProductOverview } from "./ProductOverview";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "ECommerce/Product Overview",
	component: ProductOverview,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component: "",
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
		label: "Click Me",
	},
};

export const Secondary = {
	args: {
		label: "Click Me",
	},
};

export const Large = {
	args: {
		primary: true,
		size: "lg",
		label: "Click Me",
	},
};

export const Medium = {
	args: {
		primary: true,
		size: "md",
		label: "Click Me",
	},
};

export const Small = {
	args: {
		primary: true,
		size: "sm",
		label: "Click Me",
	},
};
