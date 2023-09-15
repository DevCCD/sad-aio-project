export interface Feature {
	type: string;
	geometry: {
		type: string;
		coordinates: number[][][];
	};
	id: string;
	properties: {
		LEY: string;
		DCTO: string;
		FECHA: string;
		IDDIST: string;
		IDDPTO: string;
		IDPROV: string;
		NOMBDEP: string;
		NOM_CAP: string;
		NOMBDIST: string;
		NOMBPROV: string;
		OBJECTID: number;
		AREA_MINAM: number;
		SHAPE_AREA: number;
		SHAPE_AR_1: number;
		SHAPE_LENG: number;
		SHAPE_LE_1: number;
	};
}

export interface FeatureCollection {
	type: string;
	features: Feature[];
}
