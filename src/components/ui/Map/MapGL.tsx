"use client";

import { useState, MutableRefObject } from "react";
import {
	Map,
	Source,
	Layer,
	NavigationControl,
	MapRef,
	FullscreenControl,
} from "react-map-gl";

interface MapProps {
	featureCollection?: any | null;
	mapRef?: MutableRefObject<MapRef | null>;
}

const MapGL = ({ featureCollection, mapRef }: MapProps) => {
	const [viewState, setViewState] = useState({
		latitude: -9.979670961528786,
		longitude: -77.4041748046875,
		zoom: 1.5,
	});

	const loadComplete = () => {
		if (mapRef) {
			setTimeout(() => {
				mapRef.current?.flyTo({
					center: [-77.4041748046875, -9.979670961528786],
					duration: 2000,
					zoom: 7.5,
				});
			}, 600);
		}
	};

	return (
		<Map
			ref={mapRef}
			{...viewState}
			onMove={(evt) => setViewState(evt.viewState)}
			style={{
				width: "100%",
				height: "100%",
				position: "absolute",
				top: 0,
				left: 0,
			}}
			maxPitch={85}
			mapStyle={"mapbox://styles/mapbox/satellite-streets-v12"}
			mapboxAccessToken={process.env.NEXT_PUBLIC_API_MAPBOX}
			// projection={"globe"}
			attributionControl={false}
			// terrain 3d react-map-gl-terrain
			terrain={{
				source: "mapbox-dem",
				exaggeration: 1.5,
			}}
			onLoad={loadComplete}
		>
			{featureCollection && (
				<Source id='my-data' type='geojson' data={featureCollection}>
					<Layer
						type='fill'
						id='fill'
						source='my-data'
						paint={{
							"fill-color": "#FF0000",
							"fill-opacity": 0.3,
						}}
					/>
					<Layer
						id='line-layer'
						type='line'
						source='my-data'
						paint={{
							"line-color": "#fff",
							"line-width": 2,
						}}
					/>
				</Source>
			)}
			<Source
				id='mapbox-dem'
				type='raster-dem'
				url='mapbox://mapbox.mapbox-terrain-dem-v1'
				tileSize={512}
				maxzoom={14}
			/>
			<NavigationControl position='top-left' />
			<FullscreenControl containerId='fullscreen-control-container' />
		</Map>
	);
};
export default MapGL;
