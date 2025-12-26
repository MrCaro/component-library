import { React, useState } from "react";
import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const AddToCart = ({ primary, size, label, ...props }) => {
	const [isLabel, setIsLabel] = useState(label);
	const [isLocked, setIsLocked] = useState(false);
	const [isFading, setIsFading] = useState(false);

	const updateLabel = (next) => {
		setIsFading(true);

		setTimeout(() => {
			setIsLabel(next);
			setIsFading(false);
		}, 500);
	};

	const handleClick = () => {
		if (isLocked) return;

		setIsLocked(true);
		updateLabel("Processing");

		setTimeout(() => {
			updateLabel("Added");

			setTimeout(() => {
				updateLabel("Add to Cart");
				setIsLocked(false);
			}, 1500);
		}, 1500);
	};

	const typeClass = primary
		? "bg-zinc-900 before:bg-zinc-900 text-white"
		: "bg-zinc-500 before:bg-zinc-500 text-white";
	const sizeClass = {
		sm: "text-xs p-2 min-w-35",
		md: "text-base px-4 py-2 min-w-40",
		lg: "text-xl px-5 py-3 min-w-50",
	}[size];
	const iconSize = { sm: "16", md: "20", lg: "24" }[size];
	return (
		<>
			{label && (
				<button
					type="button"
					disabled={isLocked}
					className={[
						"group font-display relative isolate flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent font-semibold transition-all duration-400 ease-in-out before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-sm after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[inset_0_1px_--theme(--color-white/15%)] hover:after:bg-[color-mix(in_oklab,white_10%,transparent)] disabled:cursor-not-allowed",
						typeClass,
						sizeClass,
					].join(" ")}
					{...props}
					onClick={() => handleClick()}
				>
					<svg
						width={iconSize}
						height={iconSize}
						viewBox="0 0 24 24"
						fill="none"
						className={[
							"transition-all duration-300 ease-in-out group-hover:-rotate-12",
							isFading ? "translate-y-full opacity-0" : "opacity-100",
							isLocked && "rotate-0!",
						].join(" ")}
					>
						<path
							d="M3.99984 6.41402L0.756836 3.17202L2.17184 1.75702L5.41384 5.00002H20.6558C20.8117 5.00001 20.9654 5.03643 21.1047 5.10639C21.244 5.17634 21.365 5.27788 21.4581 5.40292C21.5511 5.52795 21.6137 5.673 21.6407 5.82651C21.6678 5.98001 21.6586 6.13771 21.6138 6.28702L19.2138 14.287C19.1521 14.4931 19.0255 14.6738 18.853 14.8022C18.6804 14.9307 18.471 15 18.2558 15H5.99984V17H16.9998V19H4.99984C4.73462 19 4.48027 18.8947 4.29273 18.7071C4.10519 18.5196 3.99984 18.2652 3.99984 18V6.41402ZM5.99984 7.00002V13H17.5118L19.3118 7.00002H5.99984ZM5.49984 23C5.10201 23 4.72048 22.842 4.43918 22.5607C4.15787 22.2794 3.99984 21.8978 3.99984 21.5C3.99984 21.1022 4.15787 20.7207 4.43918 20.4394C4.72048 20.1581 5.10201 20 5.49984 20C5.89766 20 6.27919 20.1581 6.5605 20.4394C6.8418 20.7207 6.99984 21.1022 6.99984 21.5C6.99984 21.8978 6.8418 22.2794 6.5605 22.5607C6.27919 22.842 5.89766 23 5.49984 23ZM17.4998 23C17.102 23 16.7205 22.842 16.4392 22.5607C16.1579 22.2794 15.9998 21.8978 15.9998 21.5C15.9998 21.1022 16.1579 20.7207 16.4392 20.4394C16.7205 20.1581 17.102 20 17.4998 20C17.8977 20 18.2792 20.1581 18.5605 20.4394C18.8418 20.7207 18.9998 21.1022 18.9998 21.5C18.9998 21.8978 18.8418 22.2794 18.5605 22.5607C18.2792 22.842 17.8977 23 17.4998 23Z"
							fill="white"
						/>
					</svg>
					<span
						className={[
							"transition-all duration-300 ease-in-out",
							isFading ? "translate-y-full opacity-0" : "opacity-100",
						].join(" ")}
					>
						{isLabel}
					</span>
				</button>
			)}
		</>
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
