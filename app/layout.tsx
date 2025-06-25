import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naufal Fathur",
  description: "Software Developer with Interactive Design Background",
  icons: {
    icon: "/faviconn.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <GoogleTagManager gtmId="GTM-5RNJH6NR" />
      <script src='script.js' defer></script>
      <body className={figtree.className}>
        {children}
      </body>
    </html>
  );
}
