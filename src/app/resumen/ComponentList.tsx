import { ComponentListProps } from "@/interface/resumen.interface";
import { useCountUp } from "use-count-up";
import { useEffect } from "react";
const ComponentList = ({
	title,
	subtitle,
	value,
	children,
	decimalPlaces = 2,
}: ComponentListProps) => {
	const { value: valor, reset } = useCountUp({
		isCounting: true,
		start: 0,
		end: Number(value),
		duration: 2,
		decimalPlaces,
		decimalSeparator: ".",
		thousandsSeparator: ",",
	});

	useEffect(() => {
		reset();
	}, [value]);
	return (
		<div className='relative w-full h-full'>
			<div className='grid items-center gap-2 w-full grid-cols-[1fr_auto]'>
				<div className='truncate'>
					<h2 className='text-xl font-bold truncate'>{title}</h2>
					<p className='text-xs truncate w-full'>{subtitle}</p>
				</div>
				<div className='text-2xl font-semibold'>
					<h3>{valor}</h3>
				</div>
			</div>
			{children && <ul className='mt-4 grid gap-4'>{children}</ul>}
		</div>
	);
};

export default ComponentList;
