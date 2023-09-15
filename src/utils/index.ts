export const numberFormat = (numero: number): number => {
	// esto es para redondear a dos decimales
	const numeroRedondo = Math.round(numero * 100) / 100;

	// Formatear los miles con comas
	// const partes = numeroRedondo.toString().split(".");
	// partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// Combinar las partes y devolver el resultado
	// return partes.join(".");
	return numeroRedondo;
};
