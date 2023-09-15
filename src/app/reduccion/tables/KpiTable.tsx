import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/Table";

import { FC } from "react";

interface KpiTableProps {}

const KpiTable: FC<KpiTableProps> = ({}) => {
	interface UGT {
		id: number;
		nombre: string;
		numberChildren: number;
		children: Children[];
	}

	interface Children {
		id: number;
		nombre: string;
		pilares: Pilares[];
	}

	interface Pilares {
		id: number;
		valores: Valor[];
	}

	interface Valor {
		id: number;
		valor: number;
	}

	const data: UGT[] = [
		{
			id: 1,
			nombre: "UGT Mina / San Marcos",
			numberChildren: 4,
			children: [
				{
					id: 1,
					nombre: "San Marcos",
					pilares: [
						{
							id: 1,
							valores: [
								{ id: 1, valor: 51 },
								{ id: 2, valor: 39 },
								{ id: 3, valor: 38 },
							],
						},
						{
							id: 2,
							valores: [
								{ id: 1, valor: 31 },
								{ id: 2, valor: 19 },
								{ id: 3, valor: 26 },
							],
						},
						{
							id: 3,
							valores: [
								{ id: 1, valor: 60 },
								{ id: 2, valor: 44 },
								{ id: 3, valor: 42 },
							],
						},
						{
							id: 4,
							valores: [
								{ id: 1, valor: 44 },
								{ id: 2, valor: 46 },
								{ id: 3, valor: 46 },
							],
						},
						{
							id: 5,
							valores: [
								{ id: 1, valor: 43 },
								{ id: 2, valor: 16 },
								{ id: 3, valor: 0 },
							],
						},
					],
				},
				{
					id: 1,
					nombre: "San Pedro de Chaná",
					pilares: [
						{
							id: 1,
							valores: [
								{ id: 1, valor: 47 },
								{ id: 2, valor: 34 },
								{ id: 3, valor: 30 },
							],
						},
						{
							id: 2,
							valores: [
								{ id: 1, valor: 34 },
								{ id: 2, valor: 15 },
								{ id: 3, valor: 25 },
							],
						},
						{
							id: 3,
							valores: [
								{ id: 1, valor: 68 },
								{ id: 2, valor: 42 },
								{ id: 3, valor: 41 },
							],
						},
						{
							id: 4,
							valores: [
								{ id: 1, valor: 57 },
								{ id: 2, valor: 67 },
								{ id: 3, valor: 72 },
							],
						},
						{
							id: 5,
							valores: [
								{ id: 1, valor: 55 },
								{ id: 2, valor: 37 },
								{ id: 3, valor: 0 },
							],
						},
					],
				},
				{
					id: 1,
					nombre: "Huachis",
					pilares: [
						{
							id: 1,
							valores: [
								{ id: 1, valor: 47 },
								{ id: 2, valor: 45 },
								{ id: 3, valor: 40 },
							],
						},
						{
							id: 2,
							valores: [
								{ id: 1, valor: 39 },
								{ id: 2, valor: 27 },
								{ id: 3, valor: 30 },
							],
						},
						{
							id: 3,
							valores: [
								{ id: 1, valor: 62 },
								{ id: 2, valor: 49 },
								{ id: 3, valor: 46 },
							],
						},
						{
							id: 4,
							valores: [
								{ id: 1, valor: 55 },
								{ id: 2, valor: 69 },
								{ id: 3, valor: 69 },
							],
						},
						{
							id: 5,
							valores: [
								{ id: 1, valor: 70 },
								{ id: 2, valor: 58 },
								{ id: 3, valor: 0 },
							],
						},
					],
				},
				{
					id: 1,
					nombre: "Chavín de Huántar",
					pilares: [
						{
							id: 1,
							valores: [
								{ id: 1, valor: 48 },
								{ id: 2, valor: 47 },
								{ id: 3, valor: 41 },
							],
						},
						{
							id: 2,
							valores: [
								{ id: 1, valor: 28 },
								{ id: 2, valor: 16 },
								{ id: 3, valor: 23 },
							],
						},
						{
							id: 3,
							valores: [
								{ id: 1, valor: 65 },
								{ id: 2, valor: 47 },
								{ id: 3, valor: 46 },
							],
						},
						{
							id: 4,
							valores: [
								{ id: 1, valor: 55 },
								{ id: 2, valor: 67 },
								{ id: 3, valor: 67 },
							],
						},
						{
							id: 5,
							valores: [
								{ id: 1, valor: 53 },
								{ id: 2, valor: 19 },
								{ id: 3, valor: 0 },
							],
						},
					],
				},
			],
		},
		{
			id: 2,
			nombre: "UGT Mina / San Marcos",
			numberChildren: 4,
			children: [
				{
					id: 1,
					nombre: "San Marcos",
					pilares: [
						{
							id: 1,
							valores: [
								{ id: 1, valor: 51 },
								{ id: 2, valor: 39 },
								{ id: 3, valor: 38 },
							],
						},
						{
							id: 2,
							valores: [
								{ id: 1, valor: 31 },
								{ id: 2, valor: 19 },
								{ id: 3, valor: 26 },
							],
						},
						{
							id: 3,
							valores: [
								{ id: 1, valor: 60 },
								{ id: 2, valor: 44 },
								{ id: 3, valor: 42 },
							],
						},
						{
							id: 4,
							valores: [
								{ id: 1, valor: 44 },
								{ id: 2, valor: 46 },
								{ id: 3, valor: 46 },
							],
						},
						{
							id: 5,
							valores: [
								{ id: 1, valor: 43 },
								{ id: 2, valor: 16 },
								{ id: 3, valor: 0 },
							],
						},
					],
				},
				{
					id: 1,
					nombre: "San Pedro de Chaná",
					pilares: [
						{
							id: 1,
							valores: [
								{ id: 1, valor: 47 },
								{ id: 2, valor: 34 },
								{ id: 3, valor: 30 },
							],
						},
						{
							id: 2,
							valores: [
								{ id: 1, valor: 34 },
								{ id: 2, valor: 15 },
								{ id: 3, valor: 25 },
							],
						},
						{
							id: 3,
							valores: [
								{ id: 1, valor: 68 },
								{ id: 2, valor: 42 },
								{ id: 3, valor: 41 },
							],
						},
						{
							id: 4,
							valores: [
								{ id: 1, valor: 57 },
								{ id: 2, valor: 67 },
								{ id: 3, valor: 72 },
							],
						},
						{
							id: 5,
							valores: [
								{ id: 1, valor: 55 },
								{ id: 2, valor: 37 },
								{ id: 3, valor: 0 },
							],
						},
					],
				},
				{
					id: 1,
					nombre: "Huachis",
					pilares: [
						{
							id: 1,
							valores: [
								{ id: 1, valor: 47 },
								{ id: 2, valor: 45 },
								{ id: 3, valor: 40 },
							],
						},
						{
							id: 2,
							valores: [
								{ id: 1, valor: 39 },
								{ id: 2, valor: 27 },
								{ id: 3, valor: 30 },
							],
						},
						{
							id: 3,
							valores: [
								{ id: 1, valor: 62 },
								{ id: 2, valor: 49 },
								{ id: 3, valor: 46 },
							],
						},
						{
							id: 4,
							valores: [
								{ id: 1, valor: 55 },
								{ id: 2, valor: 69 },
								{ id: 3, valor: 69 },
							],
						},
						{
							id: 5,
							valores: [
								{ id: 1, valor: 70 },
								{ id: 2, valor: 58 },
								{ id: 3, valor: 0 },
							],
						},
					],
				},
				{
					id: 1,
					nombre: "Chavín de Huántar",
					pilares: [
						{
							id: 1,
							valores: [
								{ id: 1, valor: 48 },
								{ id: 2, valor: 47 },
								{ id: 3, valor: 41 },
							],
						},
						{
							id: 2,
							valores: [
								{ id: 1, valor: 28 },
								{ id: 2, valor: 16 },
								{ id: 3, valor: 23 },
							],
						},
						{
							id: 3,
							valores: [
								{ id: 1, valor: 65 },
								{ id: 2, valor: 47 },
								{ id: 3, valor: 46 },
							],
						},
						{
							id: 4,
							valores: [
								{ id: 1, valor: 55 },
								{ id: 2, valor: 67 },
								{ id: 3, valor: 67 },
							],
						},
						{
							id: 5,
							valores: [
								{ id: 1, valor: 53 },
								{ id: 2, valor: 19 },
								{ id: 3, valor: 0 },
							],
						},
					],
				},
			],
		},
	];

	const pilares = [
		{
			id: 1,
			nombre: "Pilar 1: Institucionalidad madura",
		},
		{
			id: 2,
			nombre: "Pilar 2: Oportunidades para las futuras generaciones",
		},
		{
			id: 3,
			nombre: "Pilar 3: Infraestructura social y productiva",
		},
		{
			id: 4,
			nombre: "Pilar 4: Emprendimiento y desarrollo económico",
		},
		{
			id: 5,
			nombre: "Pilar 5: Emergencias",
		},
	];

	return (
		<Table className='h-full'>
			<TableHeader>
				<TableRow>
					<TableHead className=''></TableHead>
					<TableHead className=''></TableHead>
					{pilares.map((pilar, index) => (
						<TableHead
							key={pilar.id}
							className='text-center bg-[#1F497D] text-white px-3 py-2 sm:py-4 border-2 border-white'
						>
							<p className=''>
								{pilar.nombre.split(":")[0]}
								<br />
								{pilar.nombre.split(":")[1]}
							</p>
						</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((item, index) => (
					<>
						<TableRow key={item.id}>
							<TableCell
								className='truncate text-center bg-[#C6D9F1] border-b-2 border-white'
								rowSpan={item.children.length + 1}
							>
								<p className='font-medium text-lg'>
									{item.nombre}
								</p>
							</TableCell>
						</TableRow>
						{item.children.map((children, index) => {
							return (
								<TableRow
									key={children.id}
									className=' bg-[#DCE6F2] hover:bg-[#cad7e8] border-b-2 border-white'
								>
									<TableCell className='truncate font-bold py-2 '>
										<p className=''>{children.nombre}</p>
									</TableCell>
									{children.pilares.map((pilares, index) => {
										return (
											<TableCell
												key={pilares.id}
												className='py-2 border-2 border-white'
											>
												<div className='truncate flex justify-center gap-0.5'>
													{pilares.valores.map(
														(valores, index) => {
															if (
																index ===
																pilares.valores
																	.length -
																	1
															) {
																return (
																	<div
																		key={
																			valores.id
																		}
																	>
																		{
																			valores.valor
																		}
																	</div>
																);
															}

															return (
																<div
																	key={
																		valores.id
																	}
																>
																	{
																		valores.valor
																	}
																	<span>
																		/
																	</span>
																</div>
															);
														}
													)}
												</div>
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</>
				))}
			</TableBody>
		</Table>
	);
};

export default KpiTable;
