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
	regaliaMenor?: number;
	regaliaMedia?: number;
	regaliaMayor?: number;
}

const CanonAndRegaliaTable = ({
	regaliaMenor,
	regaliaMedia,
	regaliaMayor,
}: Props) => {
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
					<TableHead className='text-white py-2 truncate'>
						<p>Canon y Regalía</p>
					</TableHead>
					<TableHead className='text-white py-2 truncate'>
						<p>2007-2021</p>
					</TableHead>
					<TableHead className='text-white py-2 truncate'>
						<p>2022</p>
					</TableHead>
					<TableHead className='text-white py-2 truncate'>
						<p>2023-2026</p>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow className='border-none'>
					<TableCell className='py-3'>
						<p>
							Mineria y otros <br />
							<span className='font-normal'>(S/ millones)</span>
						</p>
					</TableCell>
					<TableCell className='py-3'>
						<CountUp {...countConfig} end={regaliaMenor} />
					</TableCell>
					<TableCell className='py-3'>
						<CountUp {...countConfig} end={regaliaMedia} />
					</TableCell>
					<TableCell className='py-3'>
						<CountUp {...countConfig} end={regaliaMayor} />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

export default CanonAndRegaliaTable;
