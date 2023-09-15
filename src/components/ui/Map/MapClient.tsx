"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

type MapProps = {
	center: [number, number];
	zoom: number;
};

const MapClient = () => {
	const mapProps: MapProps = {
		center: [-9.189967, -75.015152], // Centro de Perú
		zoom: 5,
	};

	return (
		<MapContainer
			center={mapProps.center}
			zoom={mapProps.zoom}
			className='absolute top-0 left-0 w-full h-full'
		>
			{/* <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
			<TileLayer
				url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_API_MAPBOX}`}
				attribution='Centro para la Competitividad y el Desarrollo'
				id='mapbox/streets-v11' // Puedes cambiar el estilo aquí
				accessToken={process.env.NEXT_PUBLIC_API_MAPBOX}
			/>
		</MapContainer>
	);
};

export default MapClient;
