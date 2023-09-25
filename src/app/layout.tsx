"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cloudBG from "./../assets/cloud.jpeg";
import "./globals.scss";
import { useState } from "react";

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
	const [bgImage, setBgImage] = useState(cloudBG);

	return (
		<html lang="en">
			<body className={inter.className}>
				<div
					style={{
						backgroundImage: `url(${bgImage.src})`,
					}}></div>
				{children}
			</body>
		</html>
	);
}
