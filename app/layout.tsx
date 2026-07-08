import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { ReactNode } from "react";
import { Raleway } from "next/font/google";
import BackToTop from "../components/BackToTop";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Abhijeet Acharya | Full Stack AI Engineer",
  description: "Portfolio of Abhijeet Acharya – Full Stack AI Engineer specializing in Machine Learning, NLP, and LLM-based AI systems.",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/Abhijeet-Zone",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${raleway.className} scroll-smooth`}>
      <body className="relative bg-[#000d1b] text-[#ffe6c7] overflow-x-hidden">
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
