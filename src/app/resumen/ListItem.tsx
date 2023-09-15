import { ComponentListProps } from "@/interface/resumen.interface";
import { useCountUp } from "use-count-up";
import { useEffect } from "react";
const ListItem = ({
	children,
	value,
	title,
	decimalPlaces = 1,
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
		// Reset la animación cada vez que cambie el valor
		reset();
	}, [value]);
	return (
		<li
			className='relative w-full flex justify-between items-start gap-1'
			title={title ?? ""}
		>
			<p className='text-[15px] line-clamp-2 text-ellipsis'>{children}</p>
			<span className='min-w-[54px] text-center'>{valor}</span>
		</li>
	);
};

export default ListItem;
