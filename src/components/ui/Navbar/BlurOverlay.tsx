"use client";

import { menuAtom } from "@/atoms/menuAtom";
import { useAtom } from "jotai";
import { FC, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurOverlayProps {}

const BlurOverlay: FC<BlurOverlayProps> = ({}) => {
	const [menu, setMenu] = useAtom(menuAtom);

	useEffect(() => {
		if (menu) {
			document.documentElement.style.overflow = "hidden";
		} else {
			document.documentElement.removeAttribute("style");
		}
	}, [menu]);

	return (
		<AnimatePresence>
			{menu && (
				<motion.div
					className={cn(
						"fixed z-[999] backdrop-blur-md",
						"w-full bg-[rgba(0,0,0,0.25)]",
						"lg:hidden"
					)}
					style={{
						top: "var(--navbarHeight)",
						height: "calc(100vh - var(--navbarHeight))",
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setMenu(false)}
				/>
			)}
		</AnimatePresence>
	);
};

export default BlurOverlay;
