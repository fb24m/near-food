import { BrandVariants, Theme, createLightTheme, createDarkTheme } from "@fluentui/react-components";

const myNewTheme: BrandVariants = {
	10: "#070201",
	20: "#27100B",
	30: "#441513",
	40: "#5C1717",
	50: "#74181C",
	60: "#8D1A21",
	70: "#98312F",
	80: "#A3443F",
	90: "#AE564F",
	100: "#B86760",
	110: "#C27971",
	120: "#CB8A82",
	130: "#D49B94",
	140: "#DDADA7",
	150: "#E5BFB9",
	160: "#EDD0CC"
};

export const lightTheme: Theme = {
	...createLightTheme(myNewTheme),
};

export const darkTheme: Theme = {
	...createDarkTheme(myNewTheme),
};


darkTheme.colorBrandForeground1 = myNewTheme[110];
darkTheme.colorBrandForeground2 = myNewTheme[120];