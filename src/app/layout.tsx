import { MainLayout } from "@/components/layouts";
import "@/styles/globals.scss";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import ProviderAtom from "./Provider";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "SAD AIO | %s",
		default: "SAD AIO",
	},
	description: "Sistema de Administración del Desarrollo del AIO Antamina",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es' className='lg:!overflow-auto'>
			<head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta name='author' content='Anderson Almeyda' />
				<meta name='theme-color' content='#000000' />
				<link rel='icon' href='/favicon.ico' />
				<link
					href='https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css'
					rel='stylesheet'
				/>
			</head>
			<body id='__almeyda' className={inter.className}>
				<NextTopLoader height={2} showSpinner={false} />
				<ProviderAtom>
					<MainLayout>{children}</MainLayout>
				</ProviderAtom>
			</body>
		</html>
	);
}
