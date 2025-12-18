import { fn } from "storybook/test";

import { Badge } from "./Badge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Primitives/Badge",
	component: Badge,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component:
					"A Badge component that displays a small, rounded label typically used to indicate status, categories, or counts. It supports multiple variants (e.g., primary, secondary, success, warning, error) and sizes (small, medium, large) to fit various design needs. The Badge component is designed to be easily customizable and accessible, ensuring it meets WCAG guidelines for readability and interaction.",
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
	args: { onClick: fn(), type: "success" },
	argTypes: {
		type: {
			control: { type: "select" },
			options: ["success", "warning", "error", "neutral", "friendly"],
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success = {
	args: {
		type: "success",
		label: "Badge",
	},
};

export const Warning = {
	args: {
		type: "warning",
		label: "Badge",
	},
};

export const Error = {
	args: {
		type: "error",
		label: "Badge",
	},
};

export const Neutral = {
	args: {
		type: "neutral",
		label: "Badge",
	},
};

export const Friendly = {
	args: {
		type: "friendly",
		label: "Badge",
	},
};
