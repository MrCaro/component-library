import React from "react";
import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const Badge = ({ type, label, ...props }) => {
	const typeClass = {
		success: "bg-green-100 text-green-800 border-1 border-green-300",
		warning: "bg-yellow-100 text-yellow-800 border-1 border-yellow-300",
		error: "bg-red-100 text-red-800 border-1 border-red-300",
		neutral: "bg-gray-100 text-gray-800 border-1 border-gray-300",
		friendly: "bg-purple-100 text-purple-800 border-1 border-purple-300",
	}[type];
	return (
		label && (
			<span
				className={[
					"display-heading rounded-lg px-2 py-1 text-xs font-bold uppercase",
					typeClass,
				].join(" ")}
				{...props}
			>
				{label}
			</span>
		)
	);
};

Badge.propTypes = {
	type: PropTypes.oneOf(["sucess", "warning", "error", "neutral", "friendly"]),
	label: PropTypes.string.isRequired,
};

Badge.defaultProps = {
	type: "success",
	label: "label",
};
