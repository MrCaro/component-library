import React from "react";
import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const Bento = ({ bento, demo, ...props }) => {
	const isDemo = demo && "w-[calc(100dvw-2rem)]";
	const bentoClass = "border border-zinc-200 rounded-lg p-4";
	const gridSizeClass = {
		25: "flex-[1_0_calc(25%-20px)]",
		33: "flex-[1_0_calc(33%-20px)]",
		50: "flex-[1_0_calc(50%-20px)]",
		66: "flex-[1_0_calc(66%-20px)]",
		75: "flex-[1_0_calc(75%-20px)]",
		100: "flex-[1_0_calc(100%-20px)]",
	};
	return (
		<section>
			<div className={["flex flex-wrap gap-5", isDemo].join(" ")}>
				{bento.rows.map((row, index) => (
					<div
						key={index}
						className={[bentoClass, gridSizeClass[row.span]].join(" ")}
					>
						{row.content}
					</div>
				))}
			</div>
		</section>
	);
};

Bento.propTypes = {
	demo: PropTypes.bool,
	bento: PropTypes.object.isRequired,
	span: PropTypes.oneOf(["25", "33", "50", "66", "75", "100"]),
};

Bento.defaultProps = {
	demo: true,
};
