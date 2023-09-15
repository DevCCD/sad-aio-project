"use client";

import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import css from "./css/footer.module.scss";
import { usePathname } from "next/navigation";
import { Wrapper } from "../Wrapper";
import Link from "next/link";
import routes from "@/routes";

const Footer = () => {
	const pathname = usePathname();

	const [isHome, setIsHome] = useState<boolean>(false);

	useEffect(() => {
		if (pathname === "/") {
			setIsHome(true);
		} else {
			setIsHome(false);
		}
	}, [pathname]);

	const renderIcon = (icon: string) => {
		switch (icon) {
			case "direccion":
				return <HiLocationMarker className='text-[18px]' />;

			case "telefono":
				return <FaPhoneAlt />;

			case "correo":
				return <IoIosMail className='text-[18px]' />;
			default:
				return "h";
		}
	};

	const socials: {
		id: number;
		title: string;
		icon: string;
		value: string;
		href: string;
	}[] = [
		{
			id: 1,
			title: "Dirección",
			icon: "direccion",
			value: "San Isidro, Lima - Perú",
			href: "https://goo.gl/maps/6Z1q9XZ6Z2Z1Z1Z1A",
		},
		{
			id: 2,
			title: "Teléfono",
			icon: "telefono",
			value: "+51 922 753 771",
			href: "tel:+51922753771",
		},
		{
			id: 3,
			title: "Correo",
			icon: "correo",
			value: "melissa.sanchez@competitividad.com",
			href: "mailto:melissa.sanchez@competitividadccd.com",
		},
	];

	return (
		<>
			{/* <div className='pt-12'></div> */}
			<footer className={css.footer} data-is-home={isHome}>
				<Wrapper>
					<div className={css.content}>
						<div className='grid gap-24 sm:grid-cols-2'>
							<div>
								<h2 className='text-lg font-medium'>
									Nuestros sitios
								</h2>
								<div className='grid grid-cols-2'>
									{routes.map((route) => {
										if (route.content) {
											return (
												<div
													className=''
													key={route.id}
												>
													{route.content.enlaces.map(
														(enlace) => (
															<div
																className='flex'
																key={enlace.id}
															>
																<Link
																	href={
																		enlace.href
																	}
																	className='flex items-center text-xs hover:underline'
																>
																	<IoIosArrowForward />
																	{
																		enlace.title
																	}
																</Link>
															</div>
														)
													)}
												</div>
											);
										}

										return (
											<div
												key={route.id}
												className='flex'
											>
												<Link
													href={route.href ?? "/"}
													className='flex items-center text-xs hover:underline'
												>
													<IoIosArrowForward />
													{route.title}
												</Link>
											</div>
										);
									})}
								</div>
							</div>
							<div className='overflow-hidden'>
								<h2 className='text-lg font-medium'>
									Sigue en contacto
								</h2>
								<div className='flex flex-col mt-1'>
									{socials.map((social) => (
										<div key={social.id} className='flex'>
											<Link
												href={social.href}
												className={css.contactItem}
												target='_blank'
												rel='noopener noreferrer'
											>
												<div className={css.icon}>
													{renderIcon(social.icon)}
												</div>
												<div className='w-full truncate text-xs'>
													{social.value}
												</div>
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</Wrapper>
			</footer>
		</>
	);
};

export default Footer;
