import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "weather app",
	description: "Weather",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<DynamicBackground />
				{children}
			</body>
		</html>
	);
}
