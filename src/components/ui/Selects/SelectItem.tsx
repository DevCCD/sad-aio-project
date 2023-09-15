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
import { cn } from "@/lib/utils";

interface data {
	id: number;
	title: string;
	value: string;
}

interface Props {
	data: data[];
	title?: string;
	searchTitle?: string;
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
}

const SelectItem = ({
	data,
	title,
	searchTitle,
	className,
	value: propValue,
	onChange,
}: Props) => {
	const [open, setOpen] = useState(false);
	const value = propValue ?? data[0].value;

	const findTitle = (value: string) => {
		const title = data.find((item) => item.value === value)?.title;
		return title;
	};

	return (
		<div className={cn("grid gap-1", className)}>
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
							<CommandInput
								placeholder={searchTitle ?? "Buscar"}
							/>
							<CommandEmpty>No hay resultados</CommandEmpty>
							<CommandGroup>
								{data.map((item) => (
									<CommandItem
										key={item.id}
										value={item.value}
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
												value === item.value
													? "opacity-100"
													: "opacity-0"
											}`}
										/>
										{item.title}
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

export default SelectItem;
