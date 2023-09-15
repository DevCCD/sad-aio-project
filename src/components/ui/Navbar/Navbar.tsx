import Link from "next/link";
import { Brand } from "../Brand";
import css from "./styles/navbar.module.scss";
import { Button } from "../Button";
import Name from "../Brand/Name";
import Navigation from "./Navigation";
import { Fragment, useEffect } from "react";
import BackgroundNavbar from "./BackgroundNavbar";
import MenuPhone from "./MenuPhone";
import NavigationPhone from "./NavigationPhone";
import BlurOverlay from "./BlurOverlay";
import { cn } from "@/lib/utils";

const Navbar = () => {
	return (
		<Fragment>
			<div className={cn(css.navbar, "w-full fixed sm:sticky")}>
				<div className='h-full flex items-center justify-start'>
					<Link
						href='/'
						className='grid grid-cols-[auto_auto] gap-2 items-center text-[--secondaryColor] hover:text-[--primaryColor] transition-colors duration-200'
					>
						<Brand width={50} height={50} />
						<Name
							height={21}
							width={"100%"}
							className={css.name_logo}
						/>
					</Link>
				</div>
				<div className='hidden h-full lg:flex items-center justify-center'>
					<Navigation />
				</div>
				<div className='h-full flex items-center justify-end'>
					<div className='hidden lg:block'>
						<Button>Simulación</Button>
					</div>
					<div className='lg:hidden'>
						<MenuPhone />
					</div>
				</div>
				<BackgroundNavbar />
			</div>
			<NavigationPhone />
			<BlurOverlay />
		</Fragment>
	);
};

export default Navbar;
