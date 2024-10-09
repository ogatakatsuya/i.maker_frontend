import { ui } from "@yamada-ui/core";

const CustomButton = ui("button", {
	baseStyle: {
		py: "md",
		px: "lg",
		h: "100px",
		rounded: "md",
		bg: "gray.600",
		_hover: { bg: "gray.700" },
		color: "white",
		fontSize: "5xl",
		fontWeight: "bold",
		_focus: { outline: "none", boxShadow: "none" },
		_active: { bg: "gray.700" },
	},
});

export default CustomButton;
