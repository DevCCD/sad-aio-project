import Footer from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import SocialFloat from "@/components/ui/SocialFloat";
import { ReactNode } from "react";

interface MainLayoutProps {
	className?: string;
	children: ReactNode;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
	return (
		<div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
			<Navbar />
			{children}
			<SocialFloat />
			<Footer />
		</div>
	);
};

export default MainLayout;
