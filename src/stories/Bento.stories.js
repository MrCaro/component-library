import { fn } from "storybook/test";

import { Bento } from "./Bento";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Layout/Bento",
	component: Bento,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component:
					"A versatile layout component that organizes content into a bento-grid format, allowing for various configurations such as full-width, half-width, third-width, and quarter-width sections. This component is ideal for showcasing products, features, or any grouped content in a visually appealing manner.<br><br> <strong>Use the individual view stories to see how the Bento component adapts to different grid sizes and layouts.</strong>",
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
	args: { span: "100" },
	argTypes: {
		span: {
			control: { type: "select" },
			options: ["100", "75", "66", "50", "33", "25"],
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Full = {
	args: {
		demo: true,
		bento: {
			rows: [
				{
					span: "100",
					content: "Bento 100%",
				},
			],
		},
	},
};

export const Half = {
	args: {
		demo: true,
		bento: {
			rows: [
				{
					span: "50",
					content: "Bento 50%",
				},
				{
					span: "50",
					content: "Bento 50%",
				},
			],
		},
	},
};

export const ThreeQuarters = {
	args: {
		demo: true,
		bento: {
			rows: [
				{
					span: "75",
					content: "Bento 75%",
				},
				{
					span: "25",
					content: "Bento 25%",
				},
			],
		},
	},
};

export const Third = {
	args: {
		demo: true,
		bento: {
			rows: [
				{
					span: "33",
					content: "Bento 33%",
				},
				{
					span: "33",
					content: "Bento 33%",
				},
				{
					span: "33",
					content: "Bento 33%",
				},
			],
		},
	},
};

export const Fourth = {
	args: {
		demo: true,
		bento: {
			rows: [
				{
					span: "25",
					content: "Bento 25%",
				},
				{
					span: "25",
					content: "Bento 25%",
				},
				{
					span: "25",
					content: "Bento 25%",
				},
				{
					span: "25",
					content: "Bento 25%",
				},
			],
		},
	},
};

export const TwoThirds = {
	args: {
		demo: true,
		bento: {
			rows: [
				{
					span: "66",
					content: "Bento 66%",
				},
				{
					span: "33",
					content: "Bento 33%",
				},
			],
		},
	},
};

export const Mixed = {
	args: {
		demo: true,
		bento: {
			rows: [
				{
					span: "100",
					content: "Bento 100%",
				},
				{
					span: "50",
					content: "Bento 50%",
				},
				{
					span: "50",
					content: "Bento 50%",
				},
				{
					span: "33",
					content: "Bento 33%",
				},
				{
					span: "33",
					content: "Bento 33%",
				},
				{
					span: "33",
					content: "Bento 33%",
				},
				{
					span: "25",
					content: "Bento 25%",
				},
				{
					span: "25",
					content: "Bento 25%",
				},
				{
					span: "25",
					content: "Bento 25%",
				},
				{
					span: "25",
					content: "Bento 25%",
				},
				{
					span: "25",
					content: "Bento 25%",
				},
				{
					span: "75",
					content: "Bento 75%",
				},
				{
					span: "75",
					content: "Bento 75%",
				},
				{
					span: "25",
					content: "Bento 25%",
				},
				{
					span: "66",
					content: "Bento 66%",
				},
				{
					span: "33",
					content: "Bento 33%",
				},
				{
					span: "33",
					content: "Bento 33%",
				},
				{
					span: "66",
					content: "Bento 66%",
				},
			],
		},
	},
};
