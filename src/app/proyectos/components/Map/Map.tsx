"use client";

import { MapGL } from "@/components/ui/Map";
import css from "./css/map.module.scss";
import {
	MutableRefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { MapRef } from "react-map-gl";
import { FeatureCollection } from "@/interface/feature";
import { getFeatures } from "@/app/resumen/service";
interface MapProps {
	mapRef?: MutableRefObject<MapRef | null>;
}

const Map = ({ mapRef }: MapProps) => {
	const [features, setFeatures] = useState<FeatureCollection>();

	const getData = async () => {
		const data = await getFeatures();
		setFeatures(data);
		console.log(data);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className={css.mapa_proyectos}>
			<MapGL featureCollection={features} mapRef={mapRef} />
		</div>
	);
};

export default Map;
