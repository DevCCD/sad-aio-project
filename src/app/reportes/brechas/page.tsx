"use client";
import { BsFiletypePdf, BsFiletypeXlsx } from "react-icons/bs";
import { SectionLayout } from "@/components/layouts";
import { Wrapper } from "@/components/ui/Wrapper";
import { FC, useState } from "react";
import IframePDF from "./components/IframePDF";
import { Button } from "@/components/ui/Button";
import { SelectItem } from "@/components/ui/Selects";
import Link from "next/link";

interface pageProps {}

interface SelectData {
	id: number;
	title: string;
	value: string;
}

const RBrechasPage: FC<pageProps> = ({}) => {
	const [reporteData, setReporteData] = useState<{
		periodo: string;
		title: string;
	}>({
		periodo: "22022",
		title: "Reporte 2T 2022",
	});

	const data: SelectData[] = [
		{
			id: 1,
			title: "Reporte 2T 2022",
			value: "22022",
		},
		{
			id: 2,
			title: "Reporte 3T 2022",
			value: "32022",
		},
		{
			id: 3,
			title: "Reporte 4T 2022",
			value: "42022",
		},
		{
			id: 4,
			title: "Reporte 1T 2023",
			value: "12023",
		},
	];

	// si no hay valor, se asigna el primer valor del array
	if (!reporteData.periodo) {
		setReporteData({
			...reporteData,
			periodo: data[0].value,
			title: data[0].title,
		});
	}

	const findTitle = (value: string) => {
		const title = data.find((item) => item.value === value)?.title;
		return title;
	};

	// de Reporte 1T 2023 obtener solo 1T 2023
	const nameReporte = reporteData.title.replace("Reporte ", "").trim();

	return (
		<SectionLayout
			titlebanner={`Progreso de Cierre de Brechas ${nameReporte}`}
			subtitlebanner={`AIO Antamina reporte trimestral`}
			cssBanner='max-w-[400px]'
		>
			<section className='bg-[--primaryBackground] py-6 md:py-12 lg:py-20 h-full'>
				<Wrapper>
					<div className='grid gap-4 md:grid-cols-[1fr_auto]'>
						<IframePDF
							src={`/assets/pdf/reportes/brechas/reporte${reporteData.periodo}.pdf#view=FitH`}
						/>
						<div className='relative'>
							<div className='rounded bg-white p-4 px-3 sticky top-[84px] shadow border border-gray-200 w-[290px]'>
								<div className='grid gap-4'>
									<SelectItem
										data={data}
										title={`Progreso Cierre Brechas AIO`}
										value={reporteData.periodo}
										className='gap-2'
										onChange={(value) => {
											if (value) {
												setReporteData({
													...reporteData,
													periodo: value,
													title: findTitle(value)!,
												});
											}
										}}
									/>
									<div className='grid gap-1.5'>
										<h3 className='text-[13px] font-medium text-gray-500'>
											Descargar
										</h3>
										<div className='grid gap-1.5'>
											<Button
												asChild
												className='bg-red-100 text-red-500 hover:bg-red-200'
											>
												<Link
													target='_blank'
													rel='noopener noreferrer'
													href={`/assets/pdf/reportes/brechas/reporte${reporteData.periodo}.pdf`}
													download
													title='Descargar PDF de Brechas'
												>
													<BsFiletypePdf size={22} />
													<span className='ml-2'>
														{reporteData.title}
													</span>
												</Link>
											</Button>
											<Button
												asChild
												className='bg-green-100 text-green-500 hover:bg-green-200'
											>
												<Link
													target='_blank'
													rel='noopener noreferrer'
													href={`/assets/pdf/reportes/brechas/excel${reporteData.periodo}.xlsx`}
													download
													title='Descargar Excel de Brechas'
												>
													<BsFiletypeXlsx size={22} />
													<span className='ml-2'>
														{reporteData.title}
													</span>
												</Link>
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Wrapper>
			</section>
		</SectionLayout>
	);
};

export default RBrechasPage;
