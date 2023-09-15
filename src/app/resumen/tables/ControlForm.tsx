import SelectUnidadTerritorial from "../SelectUnidadTerritorial";
import SelectPeriodo from "../SelectPeriodo";
import css from "../css/controlForm.module.scss";
import { SelectGroup } from "@/components/ui/Selects";
import { Ugt, PeriodoData } from "@/interface/resumen.interface";

interface Props {
	ugtData: Ugt[];
	onSelectUnidad?: ([x, y]: number[], zoom?: number) => void;
	periodos?: PeriodoData[];
	children?: React.ReactNode;
}

const ControlForm = ({
	ugtData,
	onSelectUnidad,
	periodos,
	children,
}: Props) => {
	return (
		<div className='text-[hsl(var(--foreground))] relative w-full h-full'>
			<div className={css.control}>{children}</div>
		</div>
	);
};

export default ControlForm;
