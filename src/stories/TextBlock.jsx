import React from "react";
import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const TextBlock = ({
	size,
	kicker,
	heading,
	headingLevel,
	body,
	...props
}) => {
	const spacingClass = { sm: "space-y-1", md: "space-y-2", lg: "space-y-4" }[
		size
	];
	const headingSizeClass = { sm: "text-lg", md: "text-xl", lg: "text-3xl" }[
		size
	];
	const bodySizeClass = { sm: "text-xs", md: "text-base", lg: "text-xl" }[size];
	const HeadingTag = headingLevel;

	return (
		<div className={spacingClass}>
			<hgroup
				className={["font-heading", headingSizeClass, spacingClass].join(" ")}
			>
				{kicker && (
					<p className={["font-heading text-xs"].join(" ")}>{kicker}</p>
				)}
				{heading && (
					<HeadingTag
						className={["font-heading font-bold", headingSizeClass].join(" ")}
					>
						{heading}
					</HeadingTag>
				)}
			</hgroup>
			{body && (
				<p
					className={[
						"font-display font-extralight text-zinc-600",
						bodySizeClass,
					].join(" ")}
				>
					{body}
				</p>
			)}
		</div>
	);
};

TextBlock.propTypes = {
	size: PropTypes.oneOf(["lg", "md", "sm"]),
	headingLevel: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};

TextBlock.defaultProps = {
	size: "md",
	headingLevel: "h1",
};
