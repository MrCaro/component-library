import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import placeholderMedia from "./assets/image-placeholder.jpg";

/** Primary UI component for user interaction */
export const Media = ({
	placeholder,
	aspectVideo,
	imageWrapperClass,
	src,
	alt,
	...props
}) => {
	const isPlaceholder =
		placeholder && aspectVideo ? "w-auto h-50" : placeholder && "size-50";
	const aspectRatioClass = aspectVideo ? "aspect-video" : "aspect-square";
	return (
		<div
			className={[
				"relative overflow-hidden rounded-lg",
				aspectRatioClass,
				isPlaceholder,
				imageWrapperClass,
			].join(" ")}
		>
			<Image
				src={src || placeholderMedia}
				alt={alt || "Image Caption"}
				className={props.imageClass || "object-cover"}
				fill={true}
			/>
		</div>
	);
};

Media.propTypes = {
	aspectVideo: PropTypes.bool,
	src: PropTypes.string,
	alt: PropTypes.string,
};

Media.defaultProps = {
	isPlaceholder: false,
	aspectVideo: false,
	src: placeholderMedia,
	alt: "Image Caption",
};
