"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
const images: { id: number; title: string; image: string }[] = [
	{
		id: 1,
		title: "imagen 1",
		image: "/assets/images/hero/1.png",
	},
	{
		id: 2,
		title: "imagen 2",
		image: "/assets/images/hero/2.png",
	},
	{
		id: 3,
		title: "imagen 3",
		image: "/assets/images/hero/3.png",
	},
	{
		id: 4,
		title: "imagen 4",
		image: "/assets/images/hero/4.png",
	},
	{
		id: 5,
		title: "imagen 5",
		image: "/assets/images/hero/5.png",
	},
];
const HeroImages = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const time = 4000;

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex < images.length - 1 ? prevIndex + 1 : 0
			);
		}, time);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className='relative w-full aspect-[5.5/4]'>
			{images.map((img, index) => (
				<Image
					key={img.id}
					src={img.image}
					alt={img.title}
					fill
					style={{
						opacity: index === currentIndex ? 1 : 0,
						transition: "opacity 1s ease-in-out",
					}}
					sizes='100%'
				/>
			))}
		</div>
	);
};

export default HeroImages;
