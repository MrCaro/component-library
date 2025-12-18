import React from "react";
import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const AddToCart = ({ primary, size, label, ...props }) => {
	const [isLabelClicked, setIsLabelClicked] = React.useState(false);
	const typeClass = primary
		? "bg-zinc-900 before:bg-zinc-900 text-white"
		: "bg-zinc-500 before:bg-zinc-500 text-white";
	const sizeClass = {
		sm: "text-xs px-2 py-1",
		md: "text-base px-4 py-2",
		lg: "text-xl px-5 py-3",
	}[size];
	return (
		<button
			type="button"
			className={[
				"font-display relative isolate inline-flex cursor-pointer items-baseline justify-center rounded-lg border border-transparent font-semibold before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-sm after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[inset_0_1px_--theme(--color-white/15%)] hover:after:bg-[color-mix(in_oklab,white_10%,transparent)]",
				typeClass,
				sizeClass,
			].join(" ")}
			{...props}
			onClick={() => setIsLabelClicked(true)}
		>
			{isLabelClicked ? "Added!" : label}
		</button>
	);
};

AddToCart.propTypes = {
	primary: PropTypes.bool,
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

AddToCart.defaultProps = {
	primary: false,
	size: "md",
	onClick: undefined,
};
