import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/styldeComponentsregister";
import StyledComponentsRegistryAntd from "./lib/AntdRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Background Check",
  description: "background check service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistryAntd>
					<StyledComponentsRegistry>
						{children}
					</StyledComponentsRegistry>
				</StyledComponentsRegistryAntd>
			</body>
    </html>
  );
}
