import { Wrapper } from "@/components/ui/Wrapper";
import GridResumen from "./GridResumen";
import { getPeriodos, getUgts } from "./service";
import { PeriodoData, ResumenData, Ugt } from "@/interface/resumen.interface";
import { getDataWithDistritoIdAndPeriodo } from "./service/index";

const Resumen = async () => {
	const [ugtsResult, periodosResult] = await Promise.all([
		getUgts(),
		getPeriodos(),
	]);

	const ugts = ugtsResult as Ugt[];
	const periodos = periodosResult as PeriodoData[];

	const firstDistrito = ugts[0].distritos[0];
	const firstPeriodo = periodos[0];

	const getData = (await getDataWithDistritoIdAndPeriodo(
		firstDistrito.id,
		firstPeriodo.value
	)) as ResumenData;

	console.log(getData);

	return (
		<section className='bg-[--primaryBackground] py-6 md:py-12 lg:py-20'>
			<Wrapper>
				<GridResumen
					data={getData}
					dataUgts={ugts}
					dataPeriodos={periodos}
					distrito={firstDistrito}
					periodo={firstPeriodo}
				/>
			</Wrapper>
		</section>
	);
};

export default Resumen;
