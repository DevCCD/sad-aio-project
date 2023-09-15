import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/Table";
import { CountUp } from "use-count-up";

interface Props {
	inversionMenor?: number;
	inversionMayor?: number;
}
const InversionSocialTable = ({ inversionMenor, inversionMayor }: Props) => {
	const countConfig = {
		isCounting: true,
		start: 0,
		duration: 2,
		decimalPlaces: 0,
		decimalSeparator: ".",
		thousandsSeparator: ",",
	};
	return (
		<Table className='text-white h-full relative'>
			<TableHeader>
				<TableRow className='border-[rgba(255,255,255,0.25)]'>
					<TableHead className='text-white py-2 truncate min-w-[200px]'>
						<p>Inversión social</p>
					</TableHead>
					<TableHead className='text-white py-2 truncate'>
						<p>2022</p>
					</TableHead>
					<TableHead className='text-white py-2 truncate'>
						<p>2023</p>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow className='border-none'>
					<TableCell className='py-3'>
						<p>
							Directa Antamina <br />
							<span className='font-normal'>(S/ millones)</span>
						</p>
					</TableCell>
					<TableCell className='py-3'>
						<CountUp {...countConfig} end={inversionMenor ?? 0} />
					</TableCell>
					<TableCell className='py-3'>
						<CountUp {...countConfig} end={inversionMayor ?? 0} />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

export default InversionSocialTable;
