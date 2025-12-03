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
      {/* <script src='script.js' defer></script> */}
      <body className={figtree.className}>
        {children}
        <div className='logo-floating fixed z-50 bottom-20 right-5 md:right-20 floating tooltip tooltip-open tooltip-top tooltip-warning cursor-pointer' data-tip="Download my portfolio">
          <Link href={'https://assets.ctfassets.net/wtyk6zs1a32v/4dEsETfazkosTJVYAgfCZz/079b9a6fa47b14996c575e8965f489d0/naufal-wahid-tech-portfolio.pdf'} target="_blank" rel="noopener noreferrer">
            <Image
              alt='logo'
              src={"https://images.ctfassets.net/wtyk6zs1a32v/7yuWJhSidjiilmTThyLXu1/741afb285cbafe5d1626e28a1b6f0eea/portfolio.png"}
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
