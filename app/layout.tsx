import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naufal Fathur",
  description: "Software Developer with Interactive Design Background",
  icons: {
    icon: "/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <script src='script.js' defer></script>
      <body className={figtree.className}>
        {children}
      </body>
    </html>
  );
}
