"use client";

import { FC, ReactNode, Fragment } from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SocialItemProps extends MotionProps {
	href?: string;
	className?: string;
	icono: ReactNode;
	nombre: string;
	animate?: boolean;
	classAnimate?: string;
	props?: React.HTMLAttributes<HTMLDivElement>;
}

const SocialItem: FC<SocialItemProps> = ({
	href,
	className,
	icono,
	nombre,
	animate,
	classAnimate,
	...props
}) => {
	return (
		<Fragment key={nombre}>
			<motion.div
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className={cn(
					"relative w-14 h-14 flex justify-center items-center",
					"rounded-full",
					className
				)}
				{...props}
			>
				{animate && (
					<span
						className={cn(
							"animate-ping -z-[1] absolute inline-flex h-full w-full",
							"rounded-full bg-sky-400 opacity-75",
							classAnimate ?? ""
						)}
					/>
				)}
				{icono}
			</motion.div>
		</Fragment>
	);
};

export default SocialItem;
