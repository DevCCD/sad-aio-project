import { MapGL } from "@/components/ui/Map";
import { useEffect, useState, useRef } from "react";
import { getFeatures } from "../service";
import { FeatureCollection } from "@/interface/feature";
import { MapRef } from "react-map-gl";

const MapSection = () => {
	const mapRef = useRef<MapRef>(null);
	const [features, setFeatures] = useState<FeatureCollection>();

	const getData = async () => {
		const data = await getFeatures();
		setFeatures(data);
		console.log(data);
	};
	useEffect(() => {
		getData();
	}, []);
	return <MapGL featureCollection={features} mapRef={mapRef} />;
};

export default MapSection;
