import { Wrapper } from "@/components/ui/Wrapper";
import KpiTable from "./tables/KpiTable";

const Reduccion = () => {
	return (
		<section className='bg-[--primaryBackground] py-6 md:py-12 lg:py-20 h-full overflow-hidden'>
			<Wrapper>
				<KpiTable />
			</Wrapper>
		</section>
	);
};

export default Reduccion;
