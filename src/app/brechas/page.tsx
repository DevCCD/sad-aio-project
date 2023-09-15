import { Wrapper } from "@/components/ui/Wrapper";
import { ControlForm } from "./components/Form";
import { GridEsquema } from "./components/GridEsquema";

const Brechas = () => {
	return (
		<section className='bg-[--primaryBackground] py-6 md:py-12 lg:py-20 h-full overflow-hidden'>
			<Wrapper>
				<ControlForm />
			</Wrapper>
			<GridEsquema />
		</section>
	);
};

export default Brechas;
