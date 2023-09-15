import React, { SVGProps } from "react";

interface NameProps extends SVGProps<SVGSVGElement> {
	className?: string;
	width?: number | string;
	height?: number | string;
}

const Name = ({ width, height, ...props }: NameProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 916.66 99.95'
			width={width || 916.66}
			height={height || 99.95}
			className={props.className}
			{...props}
		>
			<path
				d='M69.19 79.68H28.53l-7.75 18.77H0l39-87.57h20l39.16 87.57H76.94ZM62.81 64.3 48.92 30.77 35 64.3ZM107.34 10.88h20.26v87.57h-20.26ZM142.86 54.67c0-26 20.27-45.29 47.91-45.29s47.91 19.14 47.91 45.29S218.29 100 190.77 100s-47.91-19.31-47.91-45.33Zm75.31 0c0-16.64-11.76-28-27.4-28s-27.39 11.38-27.39 28 11.75 28 27.39 28 27.4-11.37 27.4-28ZM347 79.68h-40.65l-7.75 18.77h-20.77l39-87.57h20L376 98.45h-21.24Zm-6.38-15.38-13.88-33.53-13.88 33.53ZM452.58 60v38.5h-19.51V63c0-10.88-5-15.88-13.64-15.88-9.38 0-16.13 5.75-16.13 18.13v33.2h-19.52v-67.3h18.64V39c5.25-5.75 13.13-8.88 22.27-8.88 15.88.03 27.89 9.29 27.89 29.88ZM513.62 95.2c-4 2.87-9.88 4.25-15.88 4.25-15.89 0-25.15-8.13-25.15-24.14V47.66h-10.38v-15h10.38v-16.4h19.52v16.39h16.76v15h-16.76v27.4c0 5.75 3.13 8.88 8.38 8.88a13.17 13.17 0 0 0 7.88-2.5ZM584.18 60.05v38.4h-18.27v-8.38c-3.63 6.13-10.63 9.38-20.51 9.38-15.76 0-25.15-8.76-25.15-20.39 0-11.88 8.39-20.14 28.9-20.14h15.51c0-8.38-5-13.26-15.51-13.26-7.13 0-14.51 2.38-19.39 6.25l-7-13.63c7.38-5.25 18.26-8.13 29-8.13 20.53 0 32.42 9.51 32.42 29.9Zm-19.52 17.13V70.3h-13.38c-9.13 0-12 3.38-12 7.88 0 4.88 4.13 8.13 11 8.13 6.5 0 12.13-3 14.38-9.13ZM715.52 60v38.5H696V63c0-10.88-4.88-15.88-12.76-15.88-8.76 0-14.89 5.63-14.89 17.63v33.7h-19.5V63c0-10.88-4.63-15.88-12.76-15.88-8.63 0-14.76 5.63-14.76 17.63v33.7h-19.52v-67.3h18.64V39c5-5.76 12.51-8.76 21.14-8.76 9.38 0 17.39 3.63 22.14 11 5.38-6.88 14.14-11 24.27-11 16-.09 27.52 9.17 27.52 29.76ZM730.65 10.88c0-6.12 4.88-10.88 12.14-10.88s12.13 4.51 12.13 10.51c0 6.5-4.88 11.26-12.13 11.26S730.65 17 730.65 10.88ZM733 31.15h19.52v67.3H733ZM839.48 60v38.5H820V63c0-10.88-5-15.88-13.64-15.88-9.38 0-16.13 5.75-16.13 18.13v33.2h-19.55v-67.3h18.64V39c5.26-5.75 13.14-8.88 22.27-8.88 15.88.03 27.89 9.29 27.89 29.88ZM916.66 60.05v38.4H898.4v-8.38c-3.63 6.13-10.63 9.38-20.52 9.38-15.76 0-25.14-8.76-25.14-20.39 0-11.88 8.38-20.14 28.9-20.14h15.51c0-8.38-5-13.26-15.51-13.26-7.13 0-14.51 2.38-19.39 6.25l-7-13.63c7.38-5.25 18.27-8.13 29-8.13 20.53 0 32.41 9.51 32.41 29.9Zm-19.51 17.13V70.3h-13.38c-9.14 0-12 3.38-12 7.88 0 4.88 4.12 8.13 11 8.13 6.5 0 12.13-3 14.38-9.13Z'
				fill='currentColor'
			/>
		</svg>
	);
};

export default Name;