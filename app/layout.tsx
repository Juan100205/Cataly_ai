import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LangToggle from "./components/LangToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cataly AI",
  description: "La infraestructura neuronal para los ingresos",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0D0D0D]`}
      >
        <Providers>
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
