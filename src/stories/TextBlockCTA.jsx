// components
import { TextBlock } from "./TextBlock";
import { Button } from "./Button";

/** Primary UI component for user interaction */
export const TextBlockCTA = ({
	size,
	kicker,
	heading,
	headingLevel,
	body,
	label,
	...props
}) => {
	const spacingClass = { sm: "space-y-2", md: "space-y-3", lg: "space-y-4" }[
		size
	];
	return (
		<div className={spacingClass}>
			<TextBlock
				size={size}
				kicker={kicker}
				heading={heading}
				headingLevel={headingLevel}
				body={body}
				{...props}
			/>
			<div className="space-x-2">
				<Button primary={true} size={size} label={label} {...props} />
				<Button primary={false} size={size} label={label} {...props} />
			</div>
		</div>
	);
};
