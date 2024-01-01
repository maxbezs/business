import "../globals.css";
import CustomFont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const cfont = CustomFont({
  src: "../../public/e-Ukraine-Regular.otf",
  variable: "--font-cfont",
});

export const metadata = {
  title: "max_bezs business",
  description: "ALL in ONE solution for ALL Businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cfont.variable}`}>
      <body className=" font-cfont bg-black text-white pt-16">
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
