"use client";

import { usePathname } from "next/navigation";
import { Wrapper } from "../Wrapper";
import css from "./css/banner.module.scss";
import { Fragment } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { cn } from "@/lib/utils";

interface BannerSectionProps {
	loading: boolean;
	title?: string;
	subtitle?: string;
	cssBanner?: string;
}

const BannerSection = ({
	loading = false,
	title = "Título",
	subtitle = "descripción de la página, lorem ipsum dolor sit amet",
	cssBanner,
}: BannerSectionProps) => {
	const pathname = usePathname();

	const crumbs = pathname.split("/").filter((crumb) => crumb !== "");

	return (
		<header className='bg-[#F1F5F9] py-10 md:py-12'>
			<Wrapper>
				<div className='text-center flex flex-col-reverse gap-4 overflow-hidden'>
					<div className='flex justify-center items-center gap-1 text-sm text-[#C0C5D0] font-medium overflow-x-auto flex-nowrap w-full'>
						<Link
							href='/'
							className='hover:bg-slate-200 rounded-md px-2.5 py-1 hover:text-gray-500'
						>
							Inicio
						</Link>
						{crumbs.map((crumb, index) => {
							const crumbName = crumb
								.split("-")
								.map(
									(word) =>
										word[0].toUpperCase() + word.slice(1)
								)
								.join(" ");

							const isLast = index === crumbs.length - 1;

							return (
								<Fragment key={index}>
									<IoIosArrowForward className='pointer-events-none user-select-none text-[--primaryColor]' />
									{isLast ? (
										<button
											type='button'
											role='button'
											className={css.crumb}
											data-last={isLast}
										>
											{crumbName}
										</button>
									) : (
										<Link
											href={`/${crumb}`}
											className={css.crumb}
											data-last={isLast}
										>
											{crumbName}
										</Link>
									)}
								</Fragment>
							);
						})}
					</div>
					<div className={cn("max-w-lg mx-auto", cssBanner)}>
						<h1 className='text-2xl font-semibold md:text-3xl'>
							{title}
						</h1>
						<p className='mt-2 text-sm text-gray-500'>{subtitle}</p>
					</div>
				</div>
			</Wrapper>
		</header>
	);
};

export default BannerSection;
