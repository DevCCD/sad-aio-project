import { SelectItem, SelectUnidadTerritorial } from "@/components/ui/Selects";
import { impactoAntamina, periodos, periodosTiempo } from "@/data/selectData";
import { Periodo } from "@/interface/periodo.interface";
import { FC } from "react";

interface ControlFormProps {}

const ControlForm: FC<ControlFormProps> = ({}) => {
	const selectsItems: {
		title: string;
		data: Periodo[];
		searchText: string;
	}[] = [
		{
			title: "Periodo",
			data: periodos,
			searchText: "Buscar periodo",
		},
		{
			title: "Impacto",
			data: impactoAntamina,
			searchText: "Buscar impacto",
		},
	];

	return (
		<div
			className='rounded bg-white p-3.5 shadow border border-gray-200 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:sticky mb-3 z-[800]'
			style={{ top: "calc(var(--navbarHeight) + 5px)" }}
		>
			<SelectUnidadTerritorial />
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
