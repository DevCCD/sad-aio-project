"use client";
import { FC } from "react";
import { Button } from "../Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { useAtom } from "jotai";
import { contentAtom, menuAtom } from "@/atoms/menuAtom";
interface MenuPhoneProps {}

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

const MenuPhone: FC<MenuPhoneProps> = ({}) => {
	const [menu, setMenu] = useAtom(menuAtom);
	const [, setContent] = useAtom(contentAtom);

	const renderIcon = () => {
		if (menu) {
			return <X />;
		} else {
			return <Menu />;
		}
	};

	const handleClick = () => {
		setMenu(!menu);
		setContent(null);
	};

	return (
		<Button
			className={cn(
				"bg-white shadow hover:shadow-md hover:bg-white/90 transition-all duration-200 text-[--primaryColor] w-11 p-0",
				menu && "shadow-md hover:shadow-none"
			)}
			onClick={handleClick}
			data-testid='menu-phone'
			data-cy='menu-phone'
			data-cy-menu-phone={menu}
		>
			{renderIcon()}
		</Button>
	);
};

export default MenuPhone;
