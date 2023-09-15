"use client";
import { HiLocationMarker } from "react-icons/hi";
import { MapProyectos } from "./components/Map";
import Estadistica from "./components/Map/Estadistica";
import { ControlForm } from "./components/Map/Form";
import Skeleton from "@/components/ui/Skeleton";
import { useCallback, useEffect, useRef, useState } from "react";
import { getFeatures } from "../resumen/service";
import { FeatureCollection } from "@/interface/feature";
import { MapRef } from "react-map-gl";
const GridProyectos = () => {
	const mapRef = useRef<MapRef>(null);

	const onSelectUnidad = useCallback(([x, y]: number[], zoom?: number) => {
		mapRef.current?.flyTo({
			center: [y, x],
			duration: 2000,
			zoom: zoom ?? 7.5,
		});
	}, []);
	return (
		<div>
			<ControlForm onSelectUnidad={onSelectUnidad} />
			<div className='grid gap-3 lg:grid-cols-[1fr_380px]'>
				<div className='relative overflow-hidden rounded'>
					<Skeleton className='w-full h-full absolute top-0 left-0' />
					<MapProyectos mapRef={mapRef} />
					<div className='hidden sm:block sm:absolute bottom-3 left-3'>
						<Leyenda />
					</div>
				</div>
				<div className='sm:hidden'>
					<Leyenda />
				</div>
				<Estadisticas />
			</div>
		</div>
	);
};

const Leyenda = () => {
	const items = [
		{
			color: "text-green-600",
			text: "Corto Plazo",
		},
		{
			color: "text-yellow-500",
			text: "Mediano Plazo",
		},
		{
			color: "text-red-600",
			text: "Largo Plazo",
		},
	];

	return (
		<div className='bg-white shadow rounded p-3 px-4'>
			<div className='grid gap-2'>
				{items.map((item, index) => (
					<div key={index} className='flex gap-2 '>
						<HiLocationMarker size={24} className={item.color} />
						<span className='font-medium tracking-wide'>
							{item.text}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

const Estadisticas = () => {
	return (
		<div className='grid gap-3'>
			<Estadistica
				value={100}
				title={
					<>
						Cantidad de Proyectos <sup>1/</sup>
					</>
				}
			/>
			<Estadistica
				value={4748}
				title='Monto actualizado'
				subtitle={"(millones de soles)"}
			/>
		</div>
	);
};

export default GridProyectos;
