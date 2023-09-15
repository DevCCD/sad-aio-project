import { SectionLayout } from "@/components/layouts";

export const metadata = {
	title: "Resumen",
	description: "Sistema de Administración del Desarrollo del AIO Antamina",
};

const ResumenLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SectionLayout
			titlebanner='IDH distritos del AIO'
			subtitlebanner='(Comparación relativa)'
		>
			{children}
		</SectionLayout>
	);
};

export default ResumenLayout;
