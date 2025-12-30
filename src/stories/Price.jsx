import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const Price = ({ size, currency, price, ...props }) => {
	const priceSizeClass = { sm: "text-sm", md: "text-lg", lg: "text-3xl" }[size];
	return (
		<span
			className={["font-display font-bold text-zinc-900", priceSizeClass].join(
				" "
			)}
			{...props}
		>
			{new Intl.NumberFormat("en-IN", {
				style: "currency",
				currency: currency,
			}).format(price)}
		</span>
	);
};

Price.propTypes = {
	size: PropTypes.oneOf(["lg", "md", "sm"]),
	currency: PropTypes.oneOf(["USD", "EUR", "GBP"]),
	price: PropTypes.number,
};

Price.defaultProps = {
	size: "md",
	currency: "USD",
	price: 40,
};
