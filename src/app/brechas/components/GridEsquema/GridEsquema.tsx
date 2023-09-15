import { cn } from "@/lib/utils";
import css from "./css/gridesquema.module.scss";
import { FC } from "react";

interface GridEsquemaProps {}

interface Data {
	id: number;
	title: string;
	value: number;
	background: string;
	csstitle: string;
	pilares: Pilar[];
}

interface Pilar {
	id: number;
	title: string;
	value: number;
	background: string;
	kpi?: Kpi[];
	subpilares?: Subpilar[];
}

interface Subpilar {
	id: number;
	title: string;
	value: number;
	kpi?: Kpi[];
}

interface Kpi {
	id: number;
	title: string;
	value: number;
	subkpi?: Subkpi[];
}

interface Subkpi {
	id: number;
	title: string;
	value: number;
}

const GridEsquema: FC<GridEsquemaProps> = ({}) => {
	const Data: Data = {
		id: 1,
		title: "Total",
		value: 45.8,
		background: "bg-blue-500",
		csstitle: "text-3xl lg:text-4xl font-semibold",
		pilares: [
			{
				id: 1,
				title: "Pilar 1: Institucionalidad Madura",
				value: 53.2,
				background: "bg-indigo-500",
				kpi: [
					{
						id: 1,
						title: "Canon Minero, Regalía Minera y otros para el desarrollo",
						value: 83,
					},
					{
						id: 2,
						title: "Instrumentos de Planeamiento Municipal",
						value: 67.5,
						subkpi: [
							{ id: 1, title: "PDLC", value: 100 },
							{ id: 2, title: "POI", value: 80 },
							{ id: 3, title: "PEI", value: 75 },
							{ id: 4, title: "PMI", value: 15 },
						],
					},
					{
						id: 3,
						title: "Ejecución del gasto de inversión municipal",
						value: 35.7,
					},
					{
						id: 4,
						title: "Calidad del gasto de inversión municipal",
						value: 54.7,
						subkpi: [
							{
								id: 1,
								title: "Saneamiento",
								value: 48.2,
							},
							{
								id: 2,
								title: "Transporte",
								value: 44.7,
							},
							{
								id: 3,
								title: "Agropecuario",
								value: 48.1,
							},
							{
								id: 4,
								title: "Educación",
								value: 59.2,
							},
							{
								id: 5,
								title: "Salud",
								value: 73.4,
							},
						],
					},
					{
						id: 5,
						title: "Clima social para el desarrollo",
						value: 25.3,
					},
				],
			},
			{
				id: 2,
				title: "Pilar 2: Oportunidades para las futuras generaciones",
				value: 26.4,
				background: "bg-red-600",
				subpilares: [
					{
						id: 1,
						title: "Educación: EBR y años de educación",
						value: 36.9,
						kpi: [
							{
								id: 1,
								title: "Acceso educación (matriculados)",
								value: 24.9,
								subkpi: [
									{ id: 1, title: "Inicial", value: 23.7 },
									{ id: 2, title: "Primaria", value: 21.9 },
									{ id: 3, title: "Secundaria", value: 29.1 },
								],
							},
							{
								id: 2,
								title: "Nivel de educación completa",
								value: 38.6,
								subkpi: [
									{
										id: 1,
										title: "Pob. Urb. sec. Comp",
										value: 28.8,
									},
									{
										id: 2,
										title: "Pob. Rur. sec. Comp",
										value: 48.4,
									},
								],
							},
							{
								id: 3,
								title: "Logros de aprendizaje",
								value: 47.1,
								subkpi: [
									{
										id: 1,
										title: "CL. 4to Primaria",
										value: 33.9,
									},
									{
										id: 2,
										title: "Mat. 4to Primaria",
										value: 57.9,
									},
									{
										id: 3,
										title: "CL. 2do Secundaria",
										value: 46.6,
									},
									{
										id: 4,
										title: "Mat. 2do Secundaria",
										value: 50.1,
									},
								],
							},
						],
					},
					{
						id: 2,
						title: "Vida larga y saludable",
						value: 16,
						kpi: [
							{ id: 1, title: "Esperanza de vida", value: 15.1 },
							{ id: 2, title: "Anemia", value: 21.7 },
							{
								id: 3,
								title: "Desnutrición Crónica",
								value: 10.4,
							},
							{
								id: 4,
								title: "Afiliación a seguro de salud",
								value: 15.2,
							},
							{
								id: 5,
								title: "Afiliación a seguro de salud",
								value: 16.8,
							},
						],
					},
				],
			},
			{
				id: 3,
				title: "Pilar 3: Infraestructura social y productiva",
				value: 55.6,
				background: "bg-blue-800",
				subpilares: [
					{
						id: 1,
						title: "Servicios Básicos",
						value: 46.7,
						kpi: [
							{
								id: 1,
								title: "Servicios de internet (antenas)",
								value: 82.3,
							},
							{
								id: 2,
								title: "Telefonía móvil",
								value: 13.2,
							},
							{
								id: 3,
								title: "Agua",
								value: 47.4,
							},
							{
								id: 4,
								title: "Desagüe",
								value: 49.0,
							},
							{
								id: 5,
								title: "Electricidad",
								value: 11.1,
							},
							{
								id: 6,
								title: "PTAR",
								value: 85.0,
							},
							{
								id: 7,
								title: "Vial pavimentada",
								value: 38.9,
							},
						],
					},
					{
						id: 2,
						title: "Social",
						value: 83.1,
						kpi: [
							{
								id: 1,
								title: "Hospitales: Camas por mil hab.",
								value: 79.4,
							},
							{
								id: 2,
								title: "Colegios: Adecuado Estado IEE",
								value: 84.5,
								subkpi: [
									{
										id: 1,
										title: "M/L Plazo",
										value: 84.5,
									},
									{
										id: 2,
										title: "Mant. De II.EE",
										value: 90.8,
									},
									{
										id: 3,
										title: "Kits de Higiene",
										value: 83.5,
									},
									{
										id: 4,
										title: "Bicicletas Solidarias",
										value: 93,
									},
								],
							},
						],
					},
					{
						id: 3,
						title: "Productiva",
						value: 49.8,
						kpi: [
							{
								id: 1,
								title: "Agropecuario (riego tecnificado)",
								value: 53.4,
							},
							{
								id: 2,
								title: "Turistica",
								value: 24.6,
							},
							{
								id: 3,
								title: "Académica",
								value: 71.3,
								subkpi: [
									{
										id: 1,
										title: "Universidades",
										value: 95,
									},
									{
										id: 2,
										title: "Institutos",
										value: 80,
									},
									{
										id: 3,
										title: "CETPRO",
										value: 60,
									},
									{
										id: 4,
										title: "EPT",
										value: 50,
									},
								],
							},
						],
					},
					{
						id: 4,
						title: "Mantenimiento",
						value: 42.9,
						kpi: [
							{
								id: 1,
								title: "Importancia",
								value: 50.5,
							},
							{
								id: 2,
								title: "Velocidad",
								value: 35.4,
							},
						],
					},
				],
			},
			{
				id: 4,
				title: "Pilar 4: Emprendimiento y desarrollo Económico",
				value: 57.7,
				background: "bg-zinc-600",
				subpilares: [
					{
						id: 1,
						title: "Capital Humano",
						value: 50.2,
						kpi: [
							{
								id: 1,
								title: "PEA",
								value: 51.5,
							},
							{
								id: 2,
								title: "PEA ocupada",
								value: 6.9,
							},
							{
								id: 3,
								title: "Formación Univ./Técnica",
								value: 92.1,
								subkpi: [
									{
										id: 1,
										title: "Pob. Educación Univ.",
										value: 92.4,
									},
									{
										id: 2,
										title: "Pob. Educación Tec.",
										value: 91.9,
									},
								],
							},
						],
					},
					{
						id: 2,
						title: "Ingreso por persona",
						value: 65.3,
					},
				],
			},
			{
				id: 5,
				title: "Pilar 5: Emergencias",
				value: 36.3,
				background: "bg-teal-600",
				subpilares: [
					{
						id: 1,
						title: "Vacuna Covid-19",
						value: 36.3,
						kpi: [
							{
								id: 1,
								title: "1ra dosis",
								value: 32.4,
							},
							{
								id: 2,
								title: "2da dosis",
								value: 35.9,
							},
							{
								id: 3,
								title: "3ra dosis",
								value: 40.7,
							},
						],
					},
				],
			},
		],
	};

	return (
		<div className='w-fit max-w-full overflow-hidden mx-auto mt-10 px-4 lg:px-6'>
			<div className='overflow-y-hidden overflow-x-auto py-6'>
				<div
					className={cn(
						css.gridesquema,
						"items-center",
						"grid gap-3",
						"min-w-max"
					)}
				>
					<CardFather
						title={Data.title}
						value={Data.value}
						background={Data.background}
						csstitle={Data.csstitle}
						className='w-48 h-48'
						cssvalue='text-4xl'
					/>
					<div className='grid gap-3'>
						{Data.pilares.map((pilar, index) => {
							return (
								<div
									key={pilar.id}
									className={css.pilares_grid}
								>
									<CardFather
										title={pilar.title}
										value={pilar.value}
										background={pilar.background}
										csstitle='text-sm'
										cssvalue='text-2xl'
									/>

									{pilar.kpi ? (
										<div className='grid gap-0.5'>
											{pilar.kpi?.map((kpi) => {
												return (
													<div
														key={kpi.id}
														className='flex gap-3'
													>
														<div
															className={cn(
																"min-w-[268px] w-full max-w-[500px]",
																"grid justify-between grid-cols-[1fr_48px] items-center h-8"
															)}
														>
															<div
																className={cn(
																	"truncate",
																	pilar.background,
																	"text-white text-xs px-2 h-full py-1 flex items-center"
																)}
															>
																{kpi.title}
															</div>
															<div
																className={cn(
																	pilar.background,
																	"bg-opacity-20 h-full flex items-center justify-center text-xs px-2"
																)}
															>
																{kpi.value}
															</div>
														</div>
														<div className='grid w-full grid-cols-5 gap-3 h-full items-center'>
															{kpi.subkpi?.map(
																(kpi) => {
																	return (
																		<div
																			key={
																				kpi.id
																			}
																			className='grid justify-between grid-cols-[1fr_48px] items-center h-8'
																		>
																			<div
																				className={cn(
																					"truncate",
																					pilar.background,
																					"text-white text-xs px-2 h-full py-1 flex items-center"
																				)}
																			>
																				{
																					kpi.title
																				}
																			</div>
																			<div
																				className={cn(
																					pilar.background,
																					"bg-opacity-20 h-full flex items-center justify-center text-xs px-2"
																				)}
																			>
																				{
																					kpi.value
																				}
																			</div>
																		</div>
																	);
																}
															)}
														</div>
													</div>
												);
											})}
										</div>
									) : (
										<div className='grid gap-3'>
											{pilar.subpilares?.map(
												(subpilar) => {
													return (
														<div
															key={subpilar.title}
															className='flex gap-3'
														>
															<CardFather
																title={
																	subpilar.title
																}
																value={
																	subpilar.value
																}
																background={
																	pilar.background
																}
																csstitle='text-sm'
															/>
															<div className='grid gap-0.5'>
																{subpilar.kpi?.map(
																	(kpi) => {
																		return (
																			<div
																				key={
																					kpi.id
																				}
																				className='flex gap-3'
																			>
																				<div
																					className={cn(
																						"min-w-[268px] w-[268px]",
																						"grid justify-between grid-cols-[1fr_48px] items-center h-8"
																					)}
																				>
																					<div
																						className={cn(
																							"truncate",
																							pilar.background,
																							"text-white text-xs px-2 h-full py-1 flex items-center"
																						)}
																					>
																						{
																							kpi.title
																						}
																					</div>
																					<div
																						className={cn(
																							pilar.background,
																							"bg-opacity-20 h-full flex items-center justify-center text-xs px-2"
																						)}
																					>
																						{
																							kpi.value
																						}
																					</div>
																				</div>
																				<div className='grid w-full grid-cols-5 gap-3 h-full items-center'>
																					{kpi.subkpi?.map(
																						(
																							kpi
																						) => {
																							return (
																								<div
																									key={
																										kpi.id
																									}
																									className='grid justify-between grid-cols-[1fr_48px] items-center h-8'
																								>
																									<div
																										className={cn(
																											"truncate",
																											pilar.background,
																											"text-white text-xs px-2 h-full py-1 flex items-center"
																										)}
																									>
																										{
																											kpi.title
																										}
																									</div>
																									<div
																										className={cn(
																											pilar.background,
																											"bg-opacity-20 h-full flex items-center justify-center text-xs px-2"
																										)}
																									>
																										{
																											kpi.value
																										}
																									</div>
																								</div>
																							);
																						}
																					)}
																				</div>
																			</div>
																		);
																	}
																)}
															</div>
														</div>
													);
												}
											)}
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

interface CardFatherProps {
	title: string;
	value: number;
	background?: string;
	className?: string;
	csstitle?: string;
	cssvalue?: string;
}

const CardFather = ({
	title = "Titulo",
	value = 45.8,
	background,
	className,
	csstitle,
	cssvalue,
}: CardFatherProps) => {
	return (
		<div
			className={cn(
				"text-center grid gap-0.5 w-full min-w-[150px] max-w-[220px]",
				className
			)}
		>
			<div
				className={cn(
					"p-2 py-1 flex items-center justify-center",
					background
				)}
			>
				<h2 className={cn("text-white font-medium", csstitle)}>
					{title}
				</h2>
			</div>
			<div
				className={cn(
					"p-2",
					background,
					"bg-opacity-20",
					"flex items-center justify-center"
				)}
			>
				<h3 className={cn("text-lg font-medium", cssvalue)}>{value}</h3>
			</div>
		</div>
	);
};

export default GridEsquema;
