"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "./navigation-menu";
import routes from "@/routes";
import { usePathname } from "next/navigation";

export default function Navigation() {
	const pathname = usePathname();

	return (
		<div className=''>
			<NavigationMenu>
				<NavigationMenuList>
					{routes.map((route) => {
						if (route.content) {
							return (
								<NavigationMenuItem key={route.id}>
									<NavigationMenuTrigger
										data-nav-active={
											`/${route.title.toLowerCase()}` ===
											pathname
										}
									>
										{route.title}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className='grid gap-3 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] justify-center'>
											<div className=''>
												<div className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
													<div className='mb-2 mt-4 text-lg font-medium'>
														{
															route.content.banner
																.title
														}
													</div>
													<p className='text-sm leading-tight text-muted-foreground'>
														{
															route.content.banner
																.description
														}
													</p>
												</div>
											</div>
											<div className='grid'>
												{route.content.enlaces.map(
													(enlace) => (
														<ListItem
															key={enlace.id}
															title={enlace.title}
															href={enlace.href}
														>
															{enlace.title}
														</ListItem>
													)
												)}
											</div>
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
							);
						}

						return (
							<NavigationMenuItem key={route.id}>
								<Link
									href={route.href || "/"}
									legacyBehavior
									passHref
								>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										data-nav-active={
											route.href === pathname
										}
									>
										{route.title}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						);
					})}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<div>
			<NavigationMenuLink asChild>
				<Link
					ref={ref}
					className={cn(
						"block select-none h-full space-y-1 rounded-md p-3 py-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
					href={props.href || "/"}
				>
					<div className='text-sm font-medium leading-none'>
						{title}
					</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{/* {children} */}
						Descripcion
					</p>
				</Link>
			</NavigationMenuLink>
		</div>
	);
});
ListItem.displayName = "ListItem";
