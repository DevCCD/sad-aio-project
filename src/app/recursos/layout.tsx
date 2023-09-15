import { SectionLayout } from "@/components/layouts";
import { FC } from "react";

interface RecursosLayoutProps {
	children: React.ReactNode;
}

export const metadata = {
	title: "Recursos",
	description: "Sistema de Administración del Desarrollo del AIO Antamina",
};

const RecursosLayout: FC<RecursosLayoutProps> = ({ children }) => {
	return (
		<SectionLayout
			titlebanner='Transferencias de canon y regalías mineras'
			subtitlebanner='(S/. millones)'
		>
			{children}
		</SectionLayout>
	);
};

export default RecursosLayout;
