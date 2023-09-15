import { AnimatePresence, motion } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";
import Container from "./Container";

type PortalProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	children: ReactNode;
	cssContain?: string;
};
const Portal = ({ open, setOpen, children, cssContain }: PortalProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (e: MouseEvent | TouchEvent) => {
		if (
			containerRef.current &&
			!containerRef.current.contains(e.target as Node)
		) {
			setOpen(false);
		}
	};

	const togglePortal = () => {
		setOpen(!open);
	};

	useEffect(() => {
		if (open) {
			document.addEventListener("mousedown", handleClickOutside);
			document.addEventListener("touchstart", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
	}, [open]);

	return (
		<AnimatePresence>
			{open && (
				<Container>
					<div
						className='fixed bottom-0 left-0 w-full h-full z-50'
						style={{
							maxHeight: "calc(100vh - var(--navbarHeight))",
						}}
						ref={containerRef}
					>
						<motion.div
							className='absolute top-0 left-0 w-full h-full bg-[#101010]'
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.5 }}
							exit={{ opacity: 0 }}
							onClick={togglePortal}
						/>
						<div className={`relative z-[100] ${cssContain}`}>
							{children}
						</div>
					</div>
				</Container>
			)}
		</AnimatePresence>
	);
};

export default Portal;
