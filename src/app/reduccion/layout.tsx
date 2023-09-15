import { SectionLayout } from "@/components/layouts";

export const metadata = {
	title: "Reducción",
	description: "Sistema de Administración del Desarrollo del AIO Antamina",
};

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SectionLayout
			titlebanner='KPI Antamina: Reducción de Brechas en el AIO por Pilares y Distritos'
			subtitlebanner='(Porcentajes)'
			cssBanner='max-w-[600px]'
		>
			{children}
		</SectionLayout>
	);
};

export default layout;
