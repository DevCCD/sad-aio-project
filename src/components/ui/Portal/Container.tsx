"use client";

import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
	children: ReactNode;
	id?: string;
};

// crear un portal bien hecho que se autocree su div contenedor y se destruya cuando se desmonte
const Container = ({ children, id }: PortalProps) => {
	// creamos el container
	const portalContainerRef = useRef(document.createElement("div"));

	// lo montamos en el DOM
	useEffect(() => {
		const portalContainer = portalContainerRef.current;
		portalContainer.id = id || "sad-aio-portal";
		document.body.appendChild(portalContainer);

		document.documentElement.style.overflow = "hidden";

		return () => {
			document.body.removeChild(portalContainer);
			document.documentElement.removeAttribute("style");
		};
	}, [id]);

	// retornamos el portal
	return createPortal(children, portalContainerRef.current);
};

export default Container;
