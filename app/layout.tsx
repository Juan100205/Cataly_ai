import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LangToggle from "./components/LangToggle";
import PageLoader from "./components/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Cataly AI",
  description: "El sistema de adquisición que cierra los huecos de tu pipeline.",
  other: {
    "facebook-domain-verification": "s9anaaxasdwdml5t0vjulautg7ul9v",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased bg-[#0A0A0C]`}>
        <Providers>
          <PageLoader />
          <Navbar />
          <LangToggle />
          {children}
          <div className="p-4 md:p-6">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
