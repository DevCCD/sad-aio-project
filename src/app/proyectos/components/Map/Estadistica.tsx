import { ReactNode } from "react";

const Estadistica = ({
	value = 100,
	title = "Estadistica",
	subtitle,
}: {
	value: number;
	title: ReactNode | string;
	subtitle?: string;
}) => {
	return (
		<div className='rounded w-full h-full text-center bg-[#F1F5F9] p-6 flex flex-col items-center justify-center'>
			<h2 className='text-6xl font-medium'>{value}</h2>
			<h4 className='text-xl mt-3'>{title}</h4>
			{subtitle && <p className='text-sm mt-1'>{subtitle}</p>}
		</div>
	);
};

export default Estadistica;
