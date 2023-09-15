import { SectionLayout } from "@/components/layouts";

export const metadata = {
	title: "Proyectos",
	description: "Sistema de Administración del Desarrollo del AIO Antamina",
};

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SectionLayout
			titlebanner='Cartera de proyectos para el cierre de brechas y puesta en valor las potencialidades'
			subtitlebanner='(Descripción)'
			cssBanner='max-w-4xl'
		>
			{children}
		</SectionLayout>
	);
};

export default layout;
