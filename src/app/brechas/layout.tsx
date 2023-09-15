import { SectionLayout } from "@/components/layouts";

export const metadata = {
	title: "Brechas",
	description: "Sistema de Administración del Desarrollo del AIO Antamina",
};

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SectionLayout
			titlebanner='Brechas en el AIO: Por Pilares'
			subtitlebanner='(Porcentajes)'
		>
			{children}
		</SectionLayout>
	);
};

export default layout;
