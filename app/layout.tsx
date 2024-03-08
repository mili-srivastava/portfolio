import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mili Srivastava-Portfolio",
  description: "Mili Srivastava's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Link rel="apple-touch-icon"  href="/apple-touch-icon.png" />
        <Link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <Link rel="manifest" href="/site.webmanifest" />
        <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={poppins.className} >
        <Analytics />
        <SpeedInsights />
        <Navbar />
        {children}

        <Footer /> </body>
    </html>
  );
}
