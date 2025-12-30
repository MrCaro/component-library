import { fn } from "storybook/test";

import { Reviews } from "./Reviews";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "ECommerce/Reviews",
	component: Reviews,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component:
					"A review component that displays a star rating out of five. It visually represents the rating using filled and unfilled star icons, allowing users to quickly assess the quality of a product or service based on customer feedback.",
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
	args: { onClick: fn(), rating: 4 },
	argTypes: {
		size: {
			control: { rating: "select" },
			options: [0, 1, 2, 3, 4, 5],
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Great = {
	args: {
		reviews: 734,
		rating: 5,
	},
};

export const Good = {
	args: {
		reviews: 645,
		rating: 4,
	},
};

export const Mid = {
	args: {
		reviews: 548,
		rating: 3,
	},
};

export const Meh = {
	args: {
		reviews: 481,
		rating: 2,
	},
};

export const Bad = {
	args: {
		reviews: 353,
		rating: 1,
	},
};

export const Awful = {
	args: {
		reviews: 294,
		rating: 0,
	},
};
