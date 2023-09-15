"use client";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SocialItem from "./SocialItem";
import { BsWhatsapp } from "react-icons/bs";
import { Brand } from "../Brand";

interface SocialFloatProps {
	classNames?: {
		container?: string;
		items?: string;
	};
}

const SocialFloat: FC<SocialFloatProps> = ({ classNames }) => {
	const [openChat, setOpenChat]: [boolean, (openChat: boolean) => void] =
		useState<boolean>(false);

	const handleMouseEnter = () => {
		console.log("enter");
	};

	const handleMouseLeave = () => {
		console.log("leave");
	};

	return (
		<div
			className={cn(
				"fixed bottom-0 right-0 z-[1000]",
				"flex flex-col",
				"pr-5 pb-6",
				classNames?.container
			)}
		>
			<motion.div
				className={cn("grid gap-3", classNames?.items)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='flex'>
					<div className='flex flex-col items-end sm:flex-row'>
						<SocialItem
							// href='https://www.almeyda-dev.netlify.app'
							icono={<Brand className='w-full h-full' />}
							nombre='Whatsapp'
							className='shadow-xl'
							animate
							classAnimate={cn(
								"w-[calc(100%-0.75rem)] h-[calc(100%-0.75rem)]",
								"bg-[--primaryColorLight]"
							)}
							onTap={() => {
								setOpenChat(!openChat);
								console.log("click");
							}}
						/>
						<AnimatePresence>
							{openChat && (
								<motion.div
									initial={{
										height: 0,
										width: 0,
										opacity: 0,
									}}
									animate={{
										height: "auto",
										width: "auto",
										opacity: 1,
									}}
									exit={{ height: 0, width: 0, opacity: 0 }}
								>
									<motion.div
										className={cn(
											"relative",
											"bg-white mt-2 sm:mt-0",
											"w-full h-[calc(100vh-6rem)]"
										)}
										initial={{ x: 100 }}
										animate={{ x: 0 }}
										exit={{ x: 100 }}
										transition={{
											type: "linear",
											duration: 0.2,
										}}
									>
										<h2>Hola</h2>
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default SocialFloat;
