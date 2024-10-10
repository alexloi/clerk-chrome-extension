// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

export const Button = ({
	children,
	onClick,
	disabled,
	...props
}: { onClick?: () => void; disabled?: boolean; children: React.ReactNode }) => {
	return (
		<button
			type="button"
			className="px-4 py-2 rounded-md bg-white bg-opacity-10 text-white hover:bg-opacity-20"
			onClick={onClick}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};
