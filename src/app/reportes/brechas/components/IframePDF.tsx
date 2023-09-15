import { FC } from "react";

interface IframePDFProps {
	src: string;
}

const IframePDF: FC<IframePDFProps> = ({ src }) => {
	return (
		<iframe
			src={src}
			className='w-full h-[90vh]'
			width={"100%"}
			height={"100%"}
		/>
	);
};

export default IframePDF;
