import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import Link from "next/link";
import Image from "next/image";
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
        <div className='logo-floating fixed z-50 bottom-20 right-5 md:right-40 floating tooltip tooltip-open tooltip-top tooltip-warning cursor-pointer' data-tip="Click to work with me!">
          <Link href={'/contact'}>
            <Image
              alt='logo'
              src={"/logo.png"}
              width={0}
              height={0}
              sizes='15vw'
              quality={100}
              style={{ width: 'auto', height: 'auto' }}
              className='rotate-6 my-2'
            />
          </Link>
        </div>
      </body>
    </html>
  );
}
