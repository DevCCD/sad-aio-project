import { cn } from "@/lib/utils";
import css from "./skeleton.module.scss";

const Skeleton = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className={cn(
				"animate-pulse rounded overflow-hidden bg-muted",
				className
			)}
			{...props}
		>
			<div className={css.skeleton} />
		</div>
	);
};

export default Skeleton;
