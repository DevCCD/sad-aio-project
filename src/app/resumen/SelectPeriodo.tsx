"use client";

import { Button } from "@/components/ui/Button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/ComboBox/popover";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/ComboBox/command";
import { ChevronsUpDown, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { PeriodoData } from "@/interface/resumen.interface";

interface Props {
	data: PeriodoData[];
	title?: string;
	searchTitle?: string;
	className?: string;
	value?: string;
	onChange?: (value: any) => void;
}
const SelectPeriodo = ({
	data,
	searchTitle,
	className,
	value: propValue,
	onChange,
}: Props) => {
	const [open, setOpen] = useState(false);
	const value = propValue ?? data[0].value;

	const findTitle = (value: string) => {
		const title = data.find((item) => item.value === value)!.titulo;
		return title;
	};

	return (
		<div className='grid gap-1'>
			<label
				htmlFor='periodo'
				className='block text-xs font-medium text-gray-500 select-none'
			>
				Periodo
			</label>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant={"outline"}
						role='combobox'
						aria-controls='combobox-menu'
						aria-expanded={open}
						className=' w-full justify-between'
						id='periodo'
					>
						<span>{findTitle(value)}</span>
						<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-full p-0 z-[2000] h-full'>
					<ScrollArea className='max-h-[300px] overflow-y-auto'>
						<Command>
							<CommandInput placeholder='Buscar Periodo' />
							<CommandEmpty>No hay resultados</CommandEmpty>
							<CommandGroup>
								{data.map((periodo) => (
									<CommandItem
										key={periodo.id}
										value={periodo.value}
										onSelect={(currentValue) => {
											const newValue =
												currentValue === value
													? data[0].value
													: currentValue;
											if (onChange) {
												// solo se llama a onChange si está definida
												onChange(newValue);
											}
											setOpen(false);
										}}
									>
										<Check
											className={`mr-2 h-4 w-4 ${
												value === periodo.value
													? "opacity-100"
													: "opacity-0"
											}`}
										/>
										{periodo.titulo}
									</CommandItem>
								))}
							</CommandGroup>
						</Command>
					</ScrollArea>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default SelectPeriodo;
