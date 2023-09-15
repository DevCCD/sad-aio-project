import { Wrapper } from "../Wrapper";
import HeroImages from "./HeroImages";
import css from "./css/HomeHeader.module.scss";

const HomeHeader = () => {
	return (
		<div className={css.hero}>
			<Wrapper>
				<div className='flex w-full h-full items-center justify-center'>
					<div className='relative py-16 w-full lg:max-w-[85%] -mt-[var(--navbarHeight)] grid grid-cols-1 lg:grid-cols-[4.5fr_5.5fr] lg:gap-5 justify-center items-center'>
						<div className='text-center text-white lg:text-start relative z-[100]'>
							<h1
								className='font-semibold text-4xl lg:text-5xl'
								style={{
									lineHeight: "1.15",
								}}
							>
								Sistema de <br />
								Administración del <br />
								Desarrollo
							</h1>
							<p className='text-[22px] mt-4 sm:mt-5 font sm:text-xl md:text-3xl'>
								Área de Influencia Operativa <br /> Antamina
							</p>
						</div>
						<div className='absolute w-full mx-auto max-w-[500px] left-0 transform right-0 -z-0 filter brightness-50 lg:filter-none lg:z-auto lg:static lg:transform-none lg:max-w-none'>
							<HeroImages />
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	);
};

export default HomeHeader;
