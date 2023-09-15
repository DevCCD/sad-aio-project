import { atom } from "jotai";

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

export const menuAtom = atom<boolean>(false);
export const contentAtom = atom<ContentProps | null | undefined>(null);
