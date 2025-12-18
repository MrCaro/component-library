import { fn } from "storybook/test";

import { Media } from "./Image";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Primitives/Image",
	component: Media,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
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
