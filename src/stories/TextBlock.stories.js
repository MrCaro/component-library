import { fn } from "storybook/test";

import { TextBlock } from "./TextBlock";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Primitives/Text Block",
	component: TextBlock,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large = {
	args: {
		size: "lg",
		kicker: "Minimal and clean design",
		heading: "Use it your way",
		headingLevel: "h1",
		body: "Everything you need, nothing you don't. This Section allows you to have a body of copy that includes a Kicker / Heading and Full Description.",
	},
};

export const Medium = {
	args: {
		size: "md",
		kicker: "Minimal and clean design",
		heading: "Use it your way",
		headingLevel: "h1",
		body: "Everything you need, nothing you don't. This Section allows you to have a body of copy that includes a Kicker / Heading and Full Description.",
	},
};

export const Small = {
	args: {
		size: "sm",
		kicker: "Minimal and clean design",
		heading: "Use it your way",
		headingLevel: "h1",
		body: "Everything you need, nothing you don't. This Section allows you to have a body of copy that includes a Kicker / Heading and Full Description.",
	},
};
