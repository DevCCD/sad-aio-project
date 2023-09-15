"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FC, useEffect, useState } from "react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/ComboBox/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/ComboBox/popover";
import { ScrollArea } from "@/components/ui/ScrollArea";

type UnidadTerritorial = {
	id: number;
	title: string;
	value?: string;
	group?: UnidadTerritorial[];
	center?: [number, number];
};

interface Props {
	onSelectUnidad?: ([x, y]: number[], zoom?: number) => void;
}

const SelectUnidadTerritorial = ({ onSelectUnidad }: Props) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	const findTitle = (value: string) => {
		const findTitleRecursive = (
			unidadTerritorial: UnidadTerritorial[]
		): string | undefined => {
			for (const unidad of unidadTerritorial) {
				if (unidad.value === value) {
					return unidad.title;
				}
				if (unidad.group) {
					const title = findTitleRecursive(unidad.group);
					if (title) {
						return title;
					}
				}
			}
		};

		const title = findTitleRecursive(unidadTerritorial);
		return title ? title : "Selecciona una unidad territorial";
	};

	const unidadTerritorial: UnidadTerritorial[] = [
		{
			id: 1,
			title: "AIO",
			value: "aio",
			center: [-9.979670961528786, -77.4041748046875],
		},
		{
			id: 2,
			title: "UGT Huallanca",
			group: [
				{
					id: 1,
					title: "Aquia (Bolognesi / Ancash)",
					value: "aquia",
					center: [-10.0742, -77.1464],
				},
				{
					id: 2,
					title: "Chiquián (Bolognesi / Ancash)",
					value: "chiquian",
					center: [-10.1517, -77.1586],
				},
				{
					id: 3,
					title: "Huallanca (Bolognesi / Ancash)",
					value: "huallanca",
					center: [-9.8994, -76.9444],
				},
				{
					id: 4,
					title: "Llata (Huamalíes / Huánuco)",
					value: "llata",
					center: [-9.5506, -76.8156],
				},
				{
					id: 5,
					title: "Puños (Huamalíes / Huánuco)",
					value: "punios",
					center: [-9.5, -76.885],
				},
			],
		},
		{
			id: 3,
			title: "UGT Huarmey",
			group: [
				{
					id: 1,
					title: "Huarmey (Huarmey / Ancash)",
					value: "huarmey",
					center: [-10.0697, -78.1517],
				},
			],
		},
		{
			id: 4,
			title: "UGT Mina / San Marcos",
			group: [
				{
					id: 1,
					title: "Chavín de Huántar (Huari / Ancash)",
					value: "chavin",
					center: [-9.5869, -77.1772],
				},
				{
					id: 2,
					title: "Huachis (Huari / Ancash)",
					value: "huachis",
					center: [-9.4097, -77.1003],
				},
				{
					id: 3,
					title: "San Marcos (Huari / Ancash)",
					value: "san-marcos",
					center: [-9.525, -77.1575],
				},
				{
					id: 4,
					title: "San Pedro de Chaná (Huari / Ancash)",
					value: "san-pedro",
					center: [-9.4025, -77.0117],
				},
			],
		},
		{
			id: 5,
			title: "UGT Valle Fortaleza",
			group: [
				{
					id: 1,
					title: "Antonio Raymondi (Bolognesi / Ancash)",
					value: "antonio-raymondi",
					center: [-10.1575, -77.4703],
				},
				{
					id: 2,
					title: "Cajacay (Bolognesi / Ancash)",
					value: "cajacay",
					center: [-10.1564, -77.4419],
				},
				{
					id: 3,
					title: "Cátac (Recuay / Ancash)",
					value: "catac",
					center: [-9.8017, -77.4303],
				},
				{
					id: 4,
					title: "Colquioc (Bolognesi / Ancash)",
					value: "colquioc",
					center: [-10.3117, -77.6156],
				},
				{
					id: 5,
					title: "Huayllacayán (Bolognesi / Ancash)",
					value: "huayllacayan",
					center: [-10.2436, -77.4342],
				},
				{
					id: 6,
					title: "Llacllín (Recuay / Ancash)",
					value: "llacllin",
					center: [-10.07, -77.6222],
				},
				{
					id: 7,
					title: "Marca (Bolognesi / Ancash)",
					value: "marca",
					center: [-10.0884, -77.47488],
				},
				{
					id: 8,
					title: "Pampas Chico (Recuay / Ancash)",
					value: "pampas-chico",
					center: [-10.1147, -77.3981],
				},
				{
					id: 9,
					title: "Paramonga (Barranca / Lima)",
					value: "paramonga",
					center: [-10.6742, -77.8197],
				},
				{
					id: 10,
					title: "Pararin (Recuay / Ancash)",
					value: "pararin",
					center: [-10.0497, -77.6533],
				},
			],
		},
	];

	useEffect(() => {
		if (!value) {
			setValue("aio");
			if (onSelectUnidad) {
				onSelectUnidad([-9.979670961528786, -77.4041748046875], 7.5);
			}
		}
	}, [value, onSelectUnidad]);

	return (
		<div className='grid gap-1'>
			<label
				htmlFor='territoriales'
				className='block text-xs font-medium text-gray-500 select-none'
			>
				Unidad territorial
			</label>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant={"outline"}
						role='combobox'
						aria-controls='combobox-menu'
						aria-expanded={open}
						className='w-full justify-between truncate'
						id='territoriales'
					>
						<span className='truncate'>
							{value
								? findTitle(value)
								: "Selecciona una unidad territorial"}
						</span>
						<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-full p-0 z-[2000] h-full max-h-[400px] overflow-y-auto'>
					<ScrollArea>
						<Command>
							<CommandInput placeholder='Buscar' />
							<CommandEmpty>No hay resultados</CommandEmpty>
							{unidadTerritorial.map((unidad) => {
								// si no tiene group
								if (!unidad.group) {
									return (
										<CommandGroup key={unidad.id}>
											<CommandItem
												key={unidad.id}
												value={unidad.value}
												onSelect={(currentValue) => {
													setValue(
														currentValue === value
															? ""
															: currentValue
													);
													setOpen(false);
													if (onSelectUnidad) {
														onSelectUnidad(
															unidad.center || [],
															7.5
														);
													}
												}}
											>
												<Check
													className={`mr-2 h-4 w-4 ${
														value === unidad.value
															? "opacity-100"
															: "opacity-0"
													}`}
												/>
												{unidad.title}
											</CommandItem>
										</CommandGroup>
									);
								}

								return (
									<CommandGroup
										key={unidad.id}
										heading={unidad.title}
									>
										{unidad.group.map((group) => (
											<CommandItem
												key={group.id}
												value={group.value}
												onSelect={(currentValue) => {
													setValue(
														currentValue === value
															? ""
															: currentValue
													);
													setOpen(false);
													if (onSelectUnidad) {
														onSelectUnidad(
															group.center || [
																-9.979670961528786,
																-77.4041748046875,
															],
															12
														);
													}
												}}
											>
												<Check
													className={`mr-2 h-4 w-4 ${
														value === group.value
															? "opacity-100"
															: "opacity-0"
													}`}
												/>
												{group.title}
											</CommandItem>
										))}
									</CommandGroup>
								);
							})}
						</Command>
					</ScrollArea>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default SelectUnidadTerritorial;
