// "use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { usePathname } from "next/navigation";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stri-Sakhi",
  description: "Stri-Sakhi",  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <HeroSection/>
        {children}
        <Footer/>
        <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
        <script src="https://files.bpcontent.cloud/2024/10/23/20/20241023200211-2X1Z98RQ.js"></script>
      </body>
    </html>
  );
}
