import { siteMetadata } from "@/utils/meta";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = siteMetadata;

function RootLayout(props: PropsWithChildren<{}>): JSX.Element {
  return (
    <html lang="tr">
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}

export default RootLayout;