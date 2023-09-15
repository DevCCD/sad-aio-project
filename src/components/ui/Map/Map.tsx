import { FunctionComponent, useEffect, useState } from "react";

const Map: FunctionComponent = () => {
	const [Client, setClient] = useState<FunctionComponent>();

	useEffect(() => {
		const client = async () => {
			if (typeof global.window !== "undefined") {
				const newClient = (await import("./MapClient")).default;
				setClient(() => newClient);
			}
		};
		client();
	}, []);

	if (typeof global.window === "undefined" || !Client) {
		return <div>Loading...</div>;
	}

	return Client ? <Client /> : null;
};

export default Map;
