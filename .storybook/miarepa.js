import { create } from "storybook/theming";
import logo from "../src/stories/assets/miarepa-studio.png";

export default create({
	base: "light",
	brandTitle: "Miarepa Studio – Design System",
	brandUrl: "https://www.miarepa.studio/",
	brandImage: logo,
	brandTarget: "_self",
});
