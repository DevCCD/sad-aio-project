import { BannerSection } from "@/components/ui/Banner";
import { Wrapper } from "@/components/ui/Wrapper";
import { ReactNode } from "react";

interface SectionLayoutProps {
	children: ReactNode;
	titlebanner?: string;
	subtitlebanner?: string;
	cssBanner?: string;
}

const SectionLayout = ({
	children,
	titlebanner,
	subtitlebanner,
	cssBanner,
}: SectionLayoutProps) => {
	return (
		<div className='grid h-full grid-rows-[auto_1fr]'>
			<BannerSection
				loading={false}
				title={titlebanner}
				subtitle={subtitlebanner}
				cssBanner={cssBanner}
			/>
			{children}
		</div>
	);
};

export default SectionLayout;
