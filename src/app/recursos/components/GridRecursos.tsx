import { SelectUnidadTerritorial } from "@/components/ui/Selects";
import { FC } from "react";

interface GridRecursosProps {}

const GridRecursos: FC<GridRecursosProps> = ({}) => {
	return (
		<div className='grid grid-cols-[1fr_auto] gap-4'>
			<div className='bg-green-500'>grafico</div>
			<div className='grid gap-4'>
				<div className='w-full min-w-[290px] sticky top-[74px] rounded bg-white p-3.5 shadow border border-gray-100'>
					<SelectUnidadTerritorial />
				</div>
				<div className='h-[450px] w-full bg-purple-500'></div>
			</div>
		</div>
	);
};

export default GridRecursos;
