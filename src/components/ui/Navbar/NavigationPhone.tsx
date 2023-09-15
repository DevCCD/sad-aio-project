"use client";
import { FC, ReactNode, useState } from "react";
import { useAtom } from "jotai";
import { contentAtom, menuAtom } from "@/atoms/menuAtom";
import { cn } from "@/lib/utils";
import routes from "@/routes";
import { Button } from "../Button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface NavigationPhoneProps {}

interface ContentProps {
	banner: {
		title: string;
		description: string;
	};
	enlaces: {
		id: number;
		title: string;
		href: string;
	}[];
}

const NavigationPhone: FC<NavigationPhoneProps> = ({}) => {
	const [menu, setMenu] = useAtom(menuAtom);
	const [content, setContent]: [
		ContentProps | null | undefined,
		React.Dispatch<React.SetStateAction<ContentProps | null | undefined>>
	] = useAtom<ContentProps | null | undefined>(contentAtom);

	if (!menu) return null;

	return (
		<div
			className={cn(
				"lg:hidden",
				"fixed z-[1000] w-full",
				"bg-white py-3",
				"rounded-b-[4px] border-b-[1px]  shadow-md"
			)}
			style={{
				top: "var(--navbarHeight)",
				maxHeight: "calc(100vh - var(--navbarHeight))",
				overflowY: "auto",
			}}
		>
			<div className='px-[3%]'>
				{content ? (
					<div className='grid gap-6'>
						<div className='grid grid-cols-[auto_1fr] items-center gap-2'>
							<button
								className='w-10 h-10 hover:bg-[#f0f2f5] flex items-center justify-center rounded-full'
								onClick={() => setContent(null)}
							>
								<ArrowLeft className='w-6 h-6' />
							</button>
							<div className=''>
								<h2 className='text-lg font-semibold'>
									{content.banner.title}
								</h2>
								<p className='text-xs text-gray-600'>
									{content.banner.description}
								</p>
							</div>
						</div>
						<div className=''>
							{content.enlaces.map((enlace) => (
								<Link
									href={enlace.href}
									key={enlace.id}
									onClick={() => setMenu(false)}
								>
									<Button className='rounded bg-transparent text-current hover:bg-[#f0f2f5] w-full px-2 !h-12 pl-4'>
										<div className='flex w-full'>
											<h2>{enlace.title}</h2>
										</div>
										<div className='text-gray-600'>
											<div className='flex items-center flex-nowrap gap-2'>
												<div className='text-xs text-gray-400'>
													Ir
												</div>
												<ChevronRight
													className='text-gray-500'
													strokeWidth={1.5}
												/>
											</div>
										</div>
									</Button>
								</Link>
							))}
						</div>
					</div>
				) : (
					<div className='flex flex-col'>
						{routes.map((route) => {
							if (route.content)
								return (
									<div
										key={route.id}
										onClick={() =>
											setContent(route.content)
										}
									>
										<NavigationPhoneItem
											title={route.title}
											icon={
												<div className='flex items-center flex-nowrap gap-2'>
													<div className='text-xs text-gray-400 flex'>
														Ver más
													</div>
													<ChevronRight
														className='text-gray-500'
														strokeWidth={1.5}
													/>
												</div>
											}
										/>
									</div>
								);

							return (
								<Link
									href={route.href ?? "/"}
									key={route.id}
									onClick={() => setMenu(false)}
								>
									<NavigationPhoneItem
										title={route.title}
										icon={
											<div className='flex items-center flex-nowrap gap-2'>
												<div className='text-xs text-gray-400'>
													Ir
												</div>
												<ChevronRight
													className='text-gray-500'
													strokeWidth={1.5}
												/>
											</div>
										}
									/>
								</Link>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

interface ItemProps {
	title: string;
	href?: string;
	icon?: ReactNode;
}
const NavigationPhoneItem = ({ title, icon }: ItemProps) => {
	return (
		<Button className='rounded bg-transparent text-current hover:bg-[#f0f2f5] w-full px-2 !h-12 pl-4'>
			<div className='flex w-full justify-between'>
				<h2>{title ?? "Titulo"}</h2>
				<div className='text-gray-600'>{icon}</div>
			</div>
		</Button>
	);
};

export default NavigationPhone;
