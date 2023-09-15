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
import { useState } from "react";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { cn } from "@/lib/utils";
import { Ugt } from "@/interface/resumen.interface";

interface SelectProps {
	title?: string;
	value?: string;
	classNames?: {
		container?: string;
		label?: string;
		input?: string;
		button?: string;
		popover?: string;
		popoverContent?: string;
	};
	data: Ugt[];
	onChange?: (value: any) => void;
}

const SelectGroup = ({
	data,
	title,
	classNames,
	value: propValue,
	onChange,
}: SelectProps) => {
	const [open, setOpen] = useState(false);
	const value = propValue ?? data[0].distritos[0].id;

	const findTitle = (id: string) => {
		const title = data
			.map((ugt) => ugt.distritos)
			.flat()
			.find((distrito) => distrito.id === id)?.nombre;
		return title;
	};

	return (
		<div className={cn("grid gap-1", classNames?.container ?? "")}>
			{title && (
				<label
					htmlFor={title ? title.toLowerCase() : "titulo"}
					className='block text-xs font-medium text-gray-500 select-none'
				>
					{title ?? "Titulo"}
				</label>
			)}
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant={"outline"}
						role='combobox'
						aria-controls='combobox-menu'
						aria-expanded={open}
						className=' w-full justify-between truncate'
						id={title ? title.toLowerCase() : "titulo"}
					>
						<span className='truncate'>{findTitle(value)}</span>
						<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-full p-0 z-[2000] h-full'>
					<ScrollArea className='max-h-[300px] overflow-y-auto'>
						<Command>
							{/* <CommandInput
								placeholder={searchTitle ?? "Buscar"}
							/> */}
							{/* <CommandEmpty>No hay resultados</CommandEmpty> */}
							{data?.map(({ distritos, id, ugt }) => {
								return (
									<CommandGroup
										key={id}
										aria-label={ugt}
										heading={ugt}
									>
										{distritos.map((distrito) => {
											return (
												<CommandItem
													key={distrito.id}
													value={distrito.id}
													onSelect={(
														currentValue
													) => {
														const newValue =
															currentValue ===
															value
																? data[0]
																		.distritos[0]
																		.id
																: currentValue;
														if (onChange) {
															onChange(newValue);
														}
														setOpen(false);
													}}
												>
													<Check
														className={`mr-2 h-4 w-4 ${
															value ===
															distrito.id
																? "opacity-100"
																: "opacity-0"
														}`}
													/>
													{distrito.nombre}
												</CommandItem>
											);
										})}
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

export default SelectGroup;
