import Link from "next/link";
import PropTypes from "prop-types";
// components
import { TextBlockCTA } from "./TextBlockCTA";
import { Media } from "./Image";
import { Price } from "./Price";
import { AddToCart } from "./AddToCart";

/** Primary UI component for user interaction */
export const ProductCard = ({
	size,
	kicker,
	heading,
	headingLevel,
	body,
	aspectVideo,
	border,
	currency,
	price,
	primary,
	label,
	...props
}) => {
	const spacingClass = { sm: "gap-y-4", md: "gap-y-4", lg: "gap-y-6" }[size];
	return (
		<Link href={"#"} className="group cursor-pointer">
			<div
				className={[
					"flex flex-col rounded-lg",
					border && "border border-zinc-200 p-3 py-4",
					spacingClass,
				].join(" ")}
			>
				<Media
					aspectVideo={aspectVideo}
					imageClass={"group-hover:scale-125 transition-transform duration-500"}
					alt={"Image Placeholder for ProductCard Section"}
				/>
				<div className="flex gap-x-20">
					<TextBlockCTA
						size={size}
						kicker={kicker}
						heading={heading}
						headingLevel={headingLevel}
						body={body}
						{...props}
					/>
					<Price size={size} currency={currency} price={price} {...props} />
				</div>
				<div className="mt-2 mr-auto">
					<AddToCart label={label} primary={primary} size={size} />
				</div>
			</div>
		</Link>
	);
};

ProductCard.propTypes = {
	border: PropTypes.bool,
	flip: PropTypes.bool,
};

ProductCard.defaultProps = {
	border: true,
	flip: false,
};
