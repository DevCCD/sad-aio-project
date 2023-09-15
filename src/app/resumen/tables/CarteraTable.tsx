import AnimatedCountUp from "@/components/ui/AnimatedCountUp";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/Table";
import { ProyectosCartera } from "@/interface/resumen.interface";
import { useEffect } from "react";
import { CountUp } from "use-count-up";

interface CarteraProps {
	cartera?: ProyectosCartera;
}
const CarteraTable = ({ cartera }: CarteraProps) => {
	const countConfig = {
		isCounting: true,
		start: 0,
		duration: 2,
		decimalPlaces: 0,
		decimalSeparator: ".",
		thousandsSeparator: ",",
	};

	return (
		<Table className='text-white h-full'>
			<TableHeader>
				<TableRow className='border-[rgba(255,255,255,0.25)]'>
					<TableHead className='text-white py-2 min-w-[150px]'>
						<p>
							Proyectos en Cartera <sup>1/</sup>
						</p>
					</TableHead>
					<TableHead className='text-white py-2'>
						<p>Número</p>
					</TableHead>
					<TableHead className='text-white py-2 '>
						<p className='text-center'>
							Monto <br />
							<span className='font-normal'>(S/ millones)</span>
						</p>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow className='border-none'>
					<TableCell className='py-3 text-lg font-semibold'>
						Total
					</TableCell>
					<TableCell className='py-3 text-base font-semibold'>
						<AnimatedCountUp
							{...countConfig}
							end={cartera?.total?.numero ?? 0}
						/>
					</TableCell>
					<TableCell className='py-3 text-base font-semibold text-center'>
						<AnimatedCountUp
							{...countConfig}
							end={cartera?.total?.monto ?? 0}
						/>
					</TableCell>
				</TableRow>
				<TableRow className='border-none opacity-90'>
					<TableCell className='py-3'>Corto Plazo</TableCell>
					<TableCell className='py-3'>
						<AnimatedCountUp
							{...countConfig}
							end={cartera?.corto_plazo?.numero ?? 0}
						/>
					</TableCell>
					<TableCell className='py-3 text-center'>
						<AnimatedCountUp
							{...countConfig}
							end={cartera?.corto_plazo?.monto ?? 0}
						/>
					</TableCell>
				</TableRow>
				<TableRow className='border-none opacity-90'>
					<TableCell className='py-3'>Mediano Plazo</TableCell>
					<TableCell className='py-3'>
						<AnimatedCountUp
							{...countConfig}
							end={cartera?.mediano_plazo?.numero ?? 0}
						/>
					</TableCell>
					<TableCell className='py-3 text-center'>
						<AnimatedCountUp
							{...countConfig}
							end={cartera?.mediano_plazo?.monto ?? 0}
						/>
					</TableCell>
				</TableRow>
				<TableRow className='border-none opacity-90'>
					<TableCell className='py-3'>Largo PLazo</TableCell>
					<TableCell className='py-3'>
						<AnimatedCountUp
							{...countConfig}
							end={cartera?.largo_plazo?.numero ?? 0}
						/>
					</TableCell>
					<TableCell className='py-3 text-center'>
						<AnimatedCountUp
							{...countConfig}
							end={cartera?.largo_plazo?.monto ?? 0}
						/>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

export default CarteraTable;
