interface WrapperProps {
	children: React.ReactNode;
	className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
	return (
		<div className='px-[3%] '>
			<div className={`w-full max-w-[1366px] mx-auto ${className}`}>
				{children}
			</div>
		</div>
	);
};

export default Wrapper;
