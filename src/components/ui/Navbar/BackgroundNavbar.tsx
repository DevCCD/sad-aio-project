"use client";

import css from "./styles/backgroundNavbar.module.scss";
import { useState, useEffect } from "react";

const BackgroundNavbar = () => {
	const [, setPrevScrollY] = useState<number>(0);
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > 0) {
				setActive(true);
			} else {
				setActive(false);
			}
			setPrevScrollY(currentScrollY);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return <div className={css.bgnav} data-active={active} />;
};

export default BackgroundNavbar;
