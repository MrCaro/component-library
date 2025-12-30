import React from "react";
import PropTypes from "prop-types";
// components
import { Media } from "./Image";
import { TextBlockCTA } from "./TextBlockCTA";
import { Price } from "./Price";
import { ColorPicker } from "./ColorPicker";
import { SizePicker } from "./SizePicker";
import { AddToCart } from "./AddToCart";
import { Reviews } from "./Reviews";

/** Primary UI component for user interaction */
export const ProductOverview = ({
	media,
	rating,
	aspectVideo,
	size,
	category,
	heading,
	description,
	currency,
	price,
	primary,
	atc,
	colors,
	sizes,
	...props
}) => {
	return (
		<section className="grid grid-cols-12 gap-x-10 gap-y-8">
			<div className="col-span-12 md:col-span-5">
				<div className="grid grid-cols-2 gap-4">
					{media.map((item, index) => (
						<Media
							key={index}
							src={item.src}
							aspectVideo={aspectVideo}
							alt={"Image Placeholder for ProductCard Section"}
							className={index === 0 ? "col-span-2" : "col-span-1"}
						/>
					))}
				</div>
			</div>
			<div className="col-span-12 flex flex-col gap-6 md:col-span-6">
				<Reviews rating={rating} />
				<div className="flex flex-wrap items-start justify-between gap-y-2">
					<TextBlockCTA
						size={size}
						kicker={category}
						heading={heading}
						{...props}
					/>
					<Price size={size} currency={currency} price={price} {...props} />
				</div>
				<AddToCart label={atc} primary={primary} size={size} />
				{colors && (
					<div>
						<p className="font-display mb-1 font-bold">Color</p>
						<ColorPicker options={colors} />
					</div>
				)}
				{sizes && (
					<div>
						<p className="font-display mb-1 font-bold">Size Men (US)</p>
						<SizePicker options={sizes} />
					</div>
				)}
				<div>
					<p className="font-display mb-1 font-bold">Description</p>
					<TextBlockCTA body={description} {...props} />
				</div>
			</div>
		</section>
	);
};
