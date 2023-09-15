import { FeatureCollection } from "@/interface/feature";

export const getFeatures = async (): Promise<FeatureCollection> => {
	const res = await fetch(
		`https://api.maptiler.com/data/428836f4-9131-4044-a4a2-64a4422d388f/features.json?key=xlYleewapf1kKt27GBjx`
	);
	return res.json();
};
