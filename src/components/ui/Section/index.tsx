import { ReactNode, FC } from "react";
interface SectionProps {
	className?: string;
	children: ReactNode;
}

const Section: FC<SectionProps> = ({ className, children }) => {
	return (
		<section
			className={
				className
					? `${className} bg-[--primaryBackground] py-6 md:py-12 lg:py-20`
					: "bg-[--primaryBackground] py-6 md:py-12 lg:py-20"
			}
		>
			{children}
		</section>
	);
};

export default Section;
