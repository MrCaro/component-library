import { fn } from "storybook/test";

import { TextBlockCTA } from "./TextBlockCTA";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Primitives/Text Block with CTA",
	component: TextBlockCTA,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component:
					"A Text Block component that includes a Call to Action (CTA) section with buttons. It supports multiple sizes (small, medium, large) and allows customization of the kicker, heading, body text, and button labels. This component is designed to enhance user engagement by providing clear and concise information along with actionable buttons. This is an extension of the basic Text Block component, tailored for scenarios where user interaction is desired.",
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
	args: { onClick: fn(), size: "lg", headingLevel: "h1" },
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["lg", "md", "sm"],
		},
		headingLevel: {
			control: { type: "select" },
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large = {
	args: {
		size: "lg",
		kicker: "Minimal and clean design",
		heading: "Use it your way",
		headingLevel: "h1",
		body: "Everything you need, nothing you don't. This Section allows you to have a body of copy that includes a Kicker / Heading and Full Description.",
		label: "Click Me",
	},
};

export const Medium = {
	args: {
		size: "md",
		kicker: "Minimal and clean design",
		heading: "Use it your way",
		headingLevel: "h1",
		body: "Everything you need, nothing you don't. This Section allows you to have a body of copy that includes a Kicker / Heading and Full Description.",
		label: "Click Me",
	},
};

export const Small = {
	args: {
		size: "sm",
		kicker: "Minimal and clean design",
		heading: "Use it your way",
		headingLevel: "h1",
		body: "Everything you need, nothing you don't. This Section allows you to have a body of copy that includes a Kicker / Heading and Full Description.",
		label: "Click Me",
	},
};
