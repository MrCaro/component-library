import React from "react";
import PropTypes from "prop-types";
import { StarIcon } from "@heroicons/react/20/solid";

/** Primary UI component for user interaction */
export const Reviews = ({ reviews, rating }) => {
	return (
		<div className="flex flex-wrap items-center gap-1">
			{reviews && (
				<p className="font-body text-xs font-medium text-zinc-500">
					{reviews} reviews
				</p>
			)}
			<span className="flex">
				{[0, 1, 2, 3, 4].map((star) => (
					<StarIcon
						key={star}
						aria-hidden="true"
						className={[
							"size-4 shrink-0",
							rating > star ? "text-amber-500" : "text-gray-200",
						].join(" ")}
					/>
				))}
			</span>
		</div>
	);
};

Reviews.propTypes = {
	reviews: PropTypes.number,
	rating: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,
};

Reviews.defaultProps = {
	reviews: 100,
	rating: 4,
};
