import { FC } from "react";

interface layoutProps {
	children: React.ReactNode;
}

export const metadata = {
	title: "Reporte Trimestral de Brechas",
	description: "Sistema de Administración del Desarrollo del AIO Antamina",
};

const LayoutRBrechas: FC<layoutProps> = ({ children }) => {
	return children;
};

export default LayoutRBrechas;
