import { FeatureCollection } from "@/interface/feature";
import { PeriodoData, ResumenData, Ugt } from "@/interface/resumen.interface";

export const getFeatures = async (): Promise<FeatureCollection> => {
	const res = await fetch(
		`https://api.maptiler.com/data/428836f4-9131-4044-a4a2-64a4422d388f/features.json?key=xlYleewapf1kKt27GBjx`
	);
	return res.json();
};

export const getUgts = async (): Promise<Ugt[]> => {
	try {
		const res = await fetch(`${process.env.API_URL}ugt`);
		return res.json() as Promise<Ugt[]>;
	} catch (error) {
		console.log(error);
		throw new Error("Error al obtener los UGTs");
	}
};

export const getPeriodos = async (): Promise<PeriodoData[]> => {
	try {
		const res = await fetch(`${process.env.API_URL}periodo`);
		return res.json() as Promise<PeriodoData[]>;
	} catch (error) {
		console.log(error);
		throw new Error("Error al obtener los periodos");
	}
};

export const getDataWithDistritoIdAndPeriodo = async (
	distritoId: string,
	periodoValue: string
) => {
	try {
		const url = `${process.env.API_URL}resumen/${distritoId}/${periodoValue}`;
		const res = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});
		return res.json() as Promise<ResumenData>;
	} catch (error) {
		console.log(error);
		throw new Error("Error al obtener los datos de Resumen");
	}
};
