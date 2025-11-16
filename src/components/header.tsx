"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const pathname = usePathname();

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<header className="bg-white dark:bg-gray-800 shadow-sm">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex">
						<div className="flex-shrink-0 flex items-center">
							<Image
								src="/logo.svg"
								alt="Logo"
								width={32}
								height={32}
								className="dark:invert"
							/>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							<Link
								href="/"
								className="inline-flex items-center px-1 pt-1 text-sm font-medium relative"
							>
								Overview
								{pathname === "/" && (
									<span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
								)}
							</Link>
							<Link
								href="/integrations"
								className="inline-flex items-center px-1 pt-1 text-sm font-medium relative"
							>
								Integrations
								{pathname === "/integrations" && (
									<span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
								)}
							</Link>
							<Link
								href="/records"
								className="inline-flex items-center px-1 pt-1 text-sm font-medium relative"
							>
								Records Received from Webhook
								{pathname === "/records" && (
									<span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
								)}
							</Link>

							<Link
								href="/submit-form"
								className="inline-flex items-center px-1 pt-1 text-sm font-medium relative"
							>
								Demonstrate Record Sent to Webhook
								{pathname === "/submit-form" && (
									<span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
								)}
							</Link>
						</div>
					</div>
					<div className="flex items-center">
						{mounted && (
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
								aria-label="Toggle dark mode"
							>
								{theme === "dark" ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</Button>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
}
