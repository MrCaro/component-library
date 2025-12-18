import PropTypes from "prop-types";
// components
import { TextBlockCTA } from "./TextBlockCTA";
import { Media } from "./Image";

/** Primary UI component for user interaction */
export const Split5050 = ({
	size,
	kicker,
	heading,
	headingLevel,
	body,
	label,
	aspectVideo,
	flip,
	border,
	...props
}) => {
	return (
		<div
			className={[
				"grid grid-cols-12 gap-y-6 rounded-lg",
				border && "border border-zinc-200 px-3 py-4 md:px-6 md:py-8",
			].join(" ")}
		>
			<div
				className={[
					"order-2 col-span-12 flex flex-col justify-center md:col-span-6",
					flip ? "md:order-2 md:col-start-7" : "md:order-1",
				].join(" ")}
			>
				<TextBlockCTA
					size={size}
					kicker={kicker}
					heading={heading}
					headingLevel={headingLevel}
					body={body}
					label={label}
					{...props}
				/>
			</div>
			<div
				className={[
					"order-1 col-span-12 md:col-span-5",
					flip ? "md:order-1" : "md:order-2 md:col-start-8",
				].join(" ")}
			>
				<Media
					aspectVideo={aspectVideo}
					alt={"Image Placeholder for Split5050 Section"}
				/>
			</div>
		</div>
	);
};

Split5050.propTypes = {
	border: PropTypes.bool,
	flip: PropTypes.bool,
};

Split5050.defaultProps = {
	border: true,
	flip: false,
};
