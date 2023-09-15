"use client";
import Image from "next/image";
import css from "../css/potencialidadesInfo.module.scss";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import {
	DistritoPotencial,
	Potencialidades,
} from "@/interface/resumen.interface";

const PotencialidadesInfo = ({ distritoId }: { distritoId: string }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [potencialidades, setPotencialidades] = useState<Potencialidades[]>(
		[]
	);

	const getPotencialidad = async (distritoId: string) => {
		try {
			setLoading(true);
			const res = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}distrito/${distritoId}`
			);
			const data = res.data as DistritoPotencial;
			// console.log(data);
			const dataPotencialidades =
				data.potencialidades as Potencialidades[];
			setPotencialidades(dataPotencialidades);
			setLoading(false);
		} catch (error) {
			const err = error as AxiosError;
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (distritoId) {
			getPotencialidad(distritoId);
		}
	}, [distritoId]);

	return (
		<div className='overflow-hidden w-full'>
			<h4 className='text-center mb-4'>Potencialidades</h4>
			<ul className={css.lista}>
				{potencialidades.map((potencialidad) => (
					<li
						key={potencialidad.id}
						className={`flex items-center gap-3 py-1 px-3 rounded-md w-full truncate`}
						style={{ backgroundColor: potencialidad.hexColor }}
					>
						<div className='w-10 h-10 min-w-[40px] min-h-[40px] relative flex justify-center items-center'>
							<Image
								src={potencialidad.icono}
								alt={potencialidad.nombre}
								fill
								sizes='32px'
								draggable={false}
								className='object-contain'
							/>
						</div>
						<p className='w-full truncate'>
							{potencialidad.nombre}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PotencialidadesInfo;
