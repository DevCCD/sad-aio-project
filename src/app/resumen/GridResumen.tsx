"use client";
import css from "./css/grillaResumen.module.scss";
import {
	CanonAndRegaliaTable,
	CarteraTable,
	ControlForm,
	InversionSocialTable,
	PotencialidadesInfo,
} from "./tables";
import { FeatureCollection } from "@/interface/feature";
import { useEffect, useState, useRef, useCallback } from "react";
import { MapRef } from "react-map-gl";
import axios, { AxiosError } from "axios";
import {
	Ugt,
	ResumenData,
	PeriodoData,
	Distrito,
} from "@/interface/resumen.interface";
import ComponentList from "./ComponentList";
import ListItem from "./ListItem";
import { MapProyectos } from "../proyectos/components/Map";
import SelectUnidadTerritorial from "./SelectUnidadTerritorial";
import SelectPeriodo from "./SelectPeriodo";
import { SelectGroup } from "@/components/ui/Selects";

interface GridResumenProps {
	data: ResumenData;
	dataUgts: Ugt[];
	dataPeriodos: PeriodoData[];
	distrito: Distrito;
	periodo: PeriodoData;
}
const GridResumen = ({
	data,
	dataUgts,
	dataPeriodos,
	distrito,
	periodo,
}: GridResumenProps) => {
	const mapRef = useRef<MapRef>(null);
	// const [features, setFeatures] = useState<FeatureCollection>();
	const [ugts, setUgts] = useState<Ugt[]>(dataUgts);
	const [periodos, setPeriodos] = useState<PeriodoData[]>(dataPeriodos);
	const [resumenData, setResumenData] = useState<ResumenData>(data);

	const [periodoSelected, setPeriodoSelected] =
		useState<PeriodoData>(periodo);
	const [distritoSelected, setDistritoSelected] =
		useState<Distrito>(distrito);

	const brechaFisica = {
		title: "Brecha física",
		subtitle: "(%)",
		value: resumenData?.brechas[0].porcentaje ?? 0,
		list: [
			{
				id: 1,
				title: "Institucionalidad Madura",
				value: resumenData?.brechas[1].porcentaje ?? 0,
			},
			{
				id: 2,
				title: "Oportunidades para las futuras generaciones",
				value: resumenData?.brechas[2].porcentaje ?? 0,
			},
			{
				id: 3,
				title: "Infraestructura social y productiva",
				value: resumenData?.brechas[3].porcentaje ?? 0,
			},
			{
				id: 4,
				title: "Emprendimiento y desarrollo económico",
				value: resumenData?.brechas[4].porcentaje ?? 0,
			},
			{
				id: 5,
				title: "Emergencias",
				value: resumenData?.brechas[5].porcentaje ?? 0,
			},
		],
	};

	const onSelectUnidad = useCallback(([x, y]: number[], zoom?: number) => {
		mapRef.current?.flyTo({
			center: [y, x],
			duration: 2000,
			zoom: zoom ?? 7.5,
		});
	}, []);

	const convertCoords = (coords: string) => {
		// coords es este string "[x,y]" convertirlo a [x,y]
		const coordsArray = coords
			.replace("[", "")
			.replace("]", "")
			.split(",")
			.map((coord) => parseFloat(coord));
		return coordsArray;
	};

	const fetchDataWithDistritoIdAndPeriodo = async (
		distritoId: string,
		periodoValue: string
	) => {
		try {
			const { data } = await axios.post<ResumenData>(
				`${process.env.NEXT_PUBLIC_API_URL}resumen/${distritoId}/${periodoValue}`
			);
			setResumenData(data);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSelectDistrito = (value: string) => {
		// buscar el distrito en el array de ugts
		const distrito = ugts
			.map((ugt) => ugt.distritos)
			.flat()
			.find((distrito) => distrito.id === value);
		setDistritoSelected(distrito!);
		if (distrito?.nombre === "AIO") {
			onSelectUnidad(convertCoords(distrito!.coords), 7.5);
			console.log("AIO");
		} else {
			onSelectUnidad(convertCoords(distrito!.coords), 12);
		}
	};

	return (
		<>
			<div className={css.grilla}>
				<div className={`${css.item} ${css.item_a}`}>
					<ComponentList
						title='IDH'
						subtitle='Indice de desarrollo humano'
						value={resumenData?.idh ?? 0}
					/>
				</div>
				<div className={`${css.item} ${css.item_d}`}>
					<ComponentList
						title='Ingresos per cápita'
						subtitle='Soles mensual'
						decimalPlaces={0}
						value={Math.round(resumenData?.ingreso_per_capita ?? 0)}
					/>
				</div>
				<div className={`${css.item} ${css.item_e}`}>
					<ComponentList
						title={brechaFisica.title}
						subtitle={brechaFisica.subtitle}
						value={brechaFisica.value}
						decimalPlaces={1}
					>
						{brechaFisica.list.map((item) => (
							<ListItem
								key={item.id}
								value={item.value}
								title={item.title}
							>
								{item.title}
							</ListItem>
						))}
					</ComponentList>
				</div>
				<div className={`${css.item} ${css.item_f}`}>
					<ComponentList
						title='Brecha financiera'
						subtitle='(Millones de Soles)'
						value={resumenData?.brecha_financiera ?? 0}
						decimalPlaces={0}
					/>
				</div>
				<div className={`${css.item} ${css.item_b}`}>
					<MapProyectos mapRef={mapRef} />
				</div>
				<div className={`${css.item} ${css.item_c}`}>
					<ControlForm
						onSelectUnidad={onSelectUnidad}
						ugtData={ugts}
						periodos={periodos}
					>
						<SelectGroup
							data={ugts}
							title='Unidad Territorial'
							value={distritoSelected?.id}
							onChange={(value) => {
								handleSelectDistrito(value);
								fetchDataWithDistritoIdAndPeriodo(
									value,
									periodoSelected.value
								);
							}}
						/>
						<SelectPeriodo
							data={periodos}
							value={periodoSelected.value}
							onChange={(value) => {
								setPeriodoSelected(
									periodos.find(
										(periodo) => periodo.value === value
									)!
								);
								fetchDataWithDistritoIdAndPeriodo(
									distritoSelected.id,
									value
								);
							}}
						/>
					</ControlForm>
				</div>
				<div className={`${css.item} ${css.item_g}`}>
					<CarteraTable cartera={resumenData?.proyectos_cartera} />
				</div>
				<div className={`${css.item} ${css.item_h}`}>
					<CanonAndRegaliaTable
						regaliaMenor={resumenData?.recursos.regalia_menor}
						regaliaMedia={resumenData?.recursos.regalia_media}
						regaliaMayor={resumenData?.recursos.regalia_mayor}
					/>
				</div>
				<div className={`${css.item} ${css.item_i}`}>
					<InversionSocialTable
						inversionMenor={
							resumenData?.inversionSocial.inversion_menor
						}
						inversionMayor={
							resumenData?.inversionSocial.inversion_mayor
						}
					/>
				</div>
				<div className={`${css.item} ${css.item_j}`}>
					<PotencialidadesInfo distritoId={distritoSelected?.id} />
				</div>
			</div>
		</>
	);
};

export default GridResumen;
