import React from "react";
import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const SizePicker = ({ options, ...props }) => {
	return (
		options && (
			<fieldset aria-label="choose a size">
				<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
					{options.map(({ size, inStock, checked }, index) => (
						<label
							key={index}
							className={[
								"group relative flex cursor-pointer items-center justify-center rounded-lg border border-zinc-900 px-4 py-2 outline-offset-2 transition-colors duration-300 has-checked:bg-zinc-900 has-disabled:cursor-not-allowed has-disabled:opacity-50",
								inStock && "hover:bg-zinc-900",
							].join(" ")}
						>
							{!inStock && (
								<span className="absolute inset-0 m-auto h-[calc(100%+4px)] w-0.5 rotate-45 bg-rose-500"></span>
							)}
							<input
								className={[
									"absolute appearance-none outline-offset-2 forced-color-adjust-none",
								].join(" ")}
								defaultValue={size}
								defaultChecked={checked}
								name="size"
								type="radio"
								aria-label={size}
								disabled={!inStock}
								{...props}
							/>
							<span
								className={[
									"font-display text-zinc-900 uppercase group-has-checked:text-white",
									inStock &&
										"group-hover:animate-scale-bounce group-hover:text-white",
								].join(" ")}
							>
								{size}
							</span>
						</label>
					))}
				</div>
			</fieldset>
		)
	);
};

SizePicker.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired,
			inStock: PropTypes.bool,
			checked: PropTypes.bool,
		})
	).isRequired,
};

SizePicker.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: "Black",
			color: "bg-zinc-900 checked:outline-zinc-900",
			inStock: true,
			checked: true,
		})
	).isRequired,
};
