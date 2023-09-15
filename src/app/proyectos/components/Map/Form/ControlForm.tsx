"use client";

import { SelectUnidadTerritorial, SelectItem } from "@/components/ui/Selects";
import {
	periodoModalidad,
	periodoPilar,
	periodos,
	periodosTiempo,
} from "@/data/selectData";
import { Periodo } from "@/interface/periodo.interface";

interface Props {
	onSelectUnidad: ([x, y]: number[], zoom?: number) => void;
}

const ControlForm = ({ onSelectUnidad }: Props) => {
	const selectsItems: {
		title: string;
		data: Periodo[];
		searchText: string;
	}[] = [
		{
			title: "Periodo de Tiempo",
			data: periodosTiempo,
			searchText: "Buscar periodo",
		},
		{
			title: "Pilar",
			data: periodoPilar,
			searchText: "Buscar pilar",
		},
		{
			title: "Modalidad de inversión",
			data: periodoModalidad,
			searchText: "Buscar modalidad",
		},
		{
			title: "Periodo",
			data: periodos,
			searchText: "Buscar periodo",
		},
	];

	return (
		<div
			className='rounded bg-white p-3.5 shadow border border-gray-200 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_180px_1fr_1fr_180px] lg:sticky mb-3 z-[800]'
			style={{ top: "calc(var(--navbarHeight) + 5px)" }}
		>
			<SelectUnidadTerritorial onSelectUnidad={onSelectUnidad} />
			{selectsItems.map((item, index) => {
				if (index === selectsItems.length - 1) {
					return (
						<SelectItem
							key={index}
							data={item.data}
							title={item.title}
							searchTitle={item.searchText}
							className='sm:col-span-2 lg:col-span-1'
						/>
					);
				}
				return (
					<SelectItem
						key={index}
						data={item.data}
						title={item.title}
						searchTitle={item.searchText}
					/>
				);
			})}
		</div>
	);
};

export default ControlForm;
