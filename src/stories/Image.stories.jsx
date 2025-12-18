import { fn } from "storybook/test";

import { Media } from "./Image";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Primitives/Image",
	component: Media,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component:
					"An image component that supports different aspect ratios, including square (1:1) and video (16:9). It includes a placeholder option for loading states and is designed to be responsive and accessible.",
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Square = {
	args: {
		placeholder: true,
		aspectVideo: false,
		alt: "This is an 1:1 aspect ratio image",
	},
};

export const Video = {
	args: {
		placeholder: true,
		aspectVideo: true,
		alt: "This is an 16:9 aspect ratio image",
	},
};
