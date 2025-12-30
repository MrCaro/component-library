import { fn } from "storybook/test";

import { ProductOverview } from "./ProductOverview";
import beanieMocha from "./assets/beanie-mocha.png";
import beanieBlack from "./assets/beanie-black.png";
import beanieGreen from "./assets/beanie-green.png";
import shoeWhiteGreen from "./assets/shoe-white-green.png";
import shoeWhiteGold from "./assets/shoe-white-gold.png";

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
				component:
					"A product overview component that showcases essential product details, including images, ratings, pricing, descriptions, color and size options, and an add-to-cart button. This component is designed to provide users with all the necessary information to make informed purchasing decisions while ensuring a seamless and engaging shopping experience.",
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
	args: { currency: "USD" },
	argTypes: {
		currency: {
			control: { type: "select" },
			options: ["USD", "EUR", "GBP"],
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Beanie = {
	args: {
		media: [
			{ src: beanieMocha, alt: "Beanie Mocha" },
			{ src: beanieBlack, alt: "Beanie Black" },
			{ src: beanieGreen, alt: "Beanie Green" },
		],
		rating: 5,
		aspectVideo: false,
		size: "md",
		kicker: "BEANIE",
		heading: "Mocha White Gator Strip",
		headingLevel: "h1",
		price: 50,
		currency: "USD",
		primary: true,
		description:
			"This classic beanie is made from soft, breathable fabric that provides warmth and comfort. Its versatile design makes it perfect for everyday wear, whether you're heading out for a casual stroll or hitting the slopes.",
		colors: [
			{
				label: "Black",
				color: "bg-[#885937] checked:outline-[#885937]",
				inStock: true,
				checked: true,
			},
			{
				label: "Gray",
				color: "bg-[#110F19] checked:outline-[#110F19]",
				inStock: true,
				checked: false,
			},
			{
				label: "Gray",
				color: "bg-[#1A412A] checked:outline-[#1A412A]",
				inStock: true,
				checked: false,
			},
		],
		label: "Add to Cart",
	},
};

export const Shoes = {
	args: {
		media: [
			{ src: shoeWhiteGreen, alt: "Shoe White Green" },
			{ src: shoeWhiteGold, alt: "Shoe White Gold" },
		],
		rating: 4,
		aspectVideo: false,
		size: "md",
		kicker: "LIFESTYLE SHOES",
		heading: "Jade Gator S26",
		headingLevel: "h1",
		price: 110,
		currency: "USD",
		primary: true,
		description:
			"These lifestyle shoes combine comfort and style, featuring a sleek design with premium materials. Perfect for everyday wear, they provide excellent support and durability for all-day activities.",
		colors: [
			{
				label: "Black",
				color: "bg-[#4A5545] checked:outline-[#4A5545]",
				inStock: true,
				checked: true,
			},
			{
				label: "Gray",
				color: "bg-[#C09C4F] checked:outline-[#C09C4F]",
				inStock: true,
				checked: false,
			},
		],
		sizes: [
			{
				size: "5",
				inStock: true,
				checked: true,
			},
			{
				size: "6",
				inStock: true,
				checked: false,
			},
			{
				size: "7",
				inStock: false,
				checked: false,
			},
			{
				size: "8",
				inStock: true,
				checked: false,
			},
			{
				size: "9",
				inStock: false,
				checked: false,
			},
			{
				size: "10",
				inStock: true,
				checked: false,
			},
			{
				size: "11",
				inStock: true,
				checked: false,
			},
			{
				size: "12",
				inStock: true,
				checked: false,
			},
			{
				size: "13",
				inStock: true,
				checked: false,
			},
		],
		label: "Add to Cart",
	},
};
