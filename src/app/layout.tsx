// src/app/layout.tsx
"use client"
import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer.jsx";
// import Chatbot from "@/components/Chatbot.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import Navbar from "@/components/Navbar.jsx";
import Header from "@/DoctorsSection/Components/Header";

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the current path
  const pathname = usePathname();

  // Check if the current route is `/doctor-section`
  const showLayoutComponents = (pathname !== "/DoctorsSection/Doctors" && pathname !== "/DoctorsSection/DoctorDetails");


  return (
    <html lang="en">
      <body>
        {/* Conditionally render Navbar, HeroSection, and Chatbot */}
        {/* {showLayoutComponents && ( */}
          <>
            <Header />
            <HeroSection />
            {/* <Chatbot /> */}
          </>
        {/* )} */}
        {/* Render page content */}
        {/* Always render Footer */}
        {children} 
        <Footer />
        
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2024/10/23/20/20241023200211-2X1Z98RQ.js"></script>
    
      </body>
    </html>
  );
}
