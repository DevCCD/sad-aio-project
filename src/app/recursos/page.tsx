import { SelectUnidadTerritorial } from "@/components/ui/Selects";
import { Wrapper } from "@/components/ui/Wrapper";
import { NextPage } from "next";
import GridRecursos from "./components/GridRecursos";

interface RecursosPageProps {}

const RecursosPage: NextPage<RecursosPageProps> = ({}) => {
	return (
		<section className='bg-[--primaryBackground] py-6 md:py-12 lg:py-20'>
			<Wrapper>
				<GridRecursos />
			</Wrapper>
		</section>
	);
};

export default RecursosPage;
