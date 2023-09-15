import { SVGProps } from "react";

interface BrandProps extends SVGProps<SVGSVGElement> {
	className?: string;
	size?: number | string;
	primaryfill?: string;
	secondaryfill?: string;
}

const Brand = ({
	className,
	size,
	primaryfill,
	secondaryfill,
	...props
}: BrandProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			width={size ?? 211}
			height={size ?? 211}
			viewBox='0 0 211 211'
			{...props}
		>
			<circle
				cx={105.5}
				cy={105.5}
				r={105.5}
				fill={primaryfill ?? "var(--primaryColor)"}
			/>
			<rect
				width={71.98}
				height={28.23}
				x={25.4}
				y={134.79}
				fill={secondaryfill ?? "#fff"}
				rx={7.06}
			/>
			<rect
				width={71.98}
				height={28.23}
				x={69.16}
				y={91.03}
				fill={secondaryfill ?? "#fff"}
				rx={7.06}
			/>
			<rect
				width={71.98}
				height={28.23}
				x={112.91}
				y={47.28}
				fill={secondaryfill ?? "#fff"}
				rx={7.06}
			/>
			<rect
				width={28.23}
				height={71.98}
				x={112.91}
				y={47.28}
				fill={secondaryfill ?? "#fff"}
				rx={7.06}
			/>
			<rect
				width={28.23}
				height={71.98}
				x={69.16}
				y={91.03}
				fill={secondaryfill ?? "#fff"}
				rx={7.06}
			/>
		</svg>
	);
};

export default Brand;
