import { FC, useEffect, useState } from "react";
import { CountUp, Props } from "use-count-up";

interface indexProps extends Props {
	end: number;
}

const AnimatedCountUp: FC<indexProps> = ({ end, ...props }) => {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		setCount(end + 1);
	}, [end]);
	return <CountUp key={count} end={end} {...props} />;
};

export default AnimatedCountUp;
