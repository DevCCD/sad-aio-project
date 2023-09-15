interface Route {
	id: number;
	title: string;
	href?: string;
	content?: {
		banner: {
			title: string;
			description: string;
		};
		enlaces: {
			id: number;
			title: string;
			href: string;
		}[];
	};
}

const routes: Route[] = [
	{
		id: 1,
		title: "Inicio",
		href: "/",
	},
	{
		id: 2,
		title: "Resumen",
		href: "/resumen",
	},
	{
		id: 3,
		title: "Brechas",
		content: {
			banner: {
				title: "Brechas AIO",
				description:
					"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
			enlaces: [
				{
					id: 1,
					title: "Esquema",
					href: "/brechas",
				},
				{
					id: 2,
					title: "Reducción",
					href: "/reduccion",
				},
			],
		},
	},
	{
		id: 7,
		title: "Reportes",
		content: {
			banner: {
				title: "Reportes AIO",
				description:
					"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
			enlaces: [
				{
					id: 1,
					title: "Coyuntura",
					// href: "/reportes/coyuntura",
					href: "/#brechas",
				},
				{
					id: 2,
					title: "Desarrollo",
					// href: "/reportes/desarrollo",
					href: "/#desarrollo",
				},
				{
					id: 3,
					title: "Brechas",
					href: "/reportes/brechas",
				},
			],
		},
	},
	{
		id: 4,
		title: "Proyectos",
		href: "/proyectos",
	},
	{
		id: 5,
		title: "Recursos",
		href: "/recursos",
	},
	{
		id: 6,
		title: "Potencialidades",
		href: "/potencialidades",
	},
];

export default routes;
