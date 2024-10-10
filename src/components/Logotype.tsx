import React from "react";

type Props = {
	className?: string;
	size?: string;
	style?: "regular" | "spline";
	animate?: boolean;
};

type Sizes = {
	[key: string]: number;
};

export function Logotype({ className, size = "sm", animate = true }: Props) {
	const sizes: Sizes = {
		xs: 30,
		sm: 50,
		md: 160,
		lg: 360,
	};

	return (
		<svg
			width={sizes[size]}
			viewBox="0 0 116 106"
			xmlns="http://www.w3.org/2000/svg"
			aria-labelledby="logo-title"
			fill="black"
			className="fill-brandAccentBlue dark:fill-brandAccentBlue animate-in fade-in"
		>
			<title id="logo-title">lettercast.ai logotype</title>
			<circle
				cx="82"
				cy="53"
				r="29"
				fillOpacity="0.6"
				className="animate-pulse"
			/>

			<path d="M91.4248 46.1224C96.6429 49.2228 96.6429 56.7772 91.4248 59.8776L37.8364 91.718C32.5037 94.8865 25.75 91.0434 25.75 84.8404L25.75 21.1596C25.75 14.9566 32.5037 11.1135 37.8364 14.282L91.4248 46.1224Z" />
		</svg>
	);
}
