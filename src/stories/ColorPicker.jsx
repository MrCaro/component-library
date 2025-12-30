import React from "react";
import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const ColorPicker = ({ options, ...props }) => {
	return (
		options && (
			<fieldset aria-label="choose a color">
				<div className="flex items-center gap-x-3">
					{options.map(({ label, color, inStock, checked }, index) => (
						<div
							key={index}
							className="relative flex size-5 rounded-full outline-offset-2 has-disabled:outline-2 has-disabled:outline-rose-500"
						>
							{!inStock && (
								<span className="absolute inset-0 m-auto h-[calc(100%+4px)] w-0.5 rotate-45 bg-rose-500"></span>
							)}
							<input
								className={[
									"size-5 cursor-pointer appearance-none rounded-full outline-offset-2 transition-all duration-150 ease-in-out forced-color-adjust-none checked:outline-2 checked:outline-offset-2 hover:outline-2 focus-visible:outline-3 focus-visible:outline-offset-3 disabled:cursor-not-allowed disabled:opacity-50",
									color,
								].join(" ")}
								defaultValue={label}
								defaultChecked={checked}
								name="color"
								type="radio"
								aria-label={label}
								disabled={!inStock}
								{...props}
							/>
						</div>
					))}
				</div>
			</fieldset>
		)
	);
};

ColorPicker.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired,
			inStock: PropTypes.bool,
			checked: PropTypes.bool,
		})
	).isRequired,
};

ColorPicker.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: "Black",
			color: "bg-zinc-900 checked:outline-zinc-900",
			inStock: true,
			checked: true,
		})
	).isRequired,
};
