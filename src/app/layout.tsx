import type { Metadata } from "next";
import "./globals.css";
import Local_Font from "next/font/local";
import { Header } from "./_components/header";
import { SmoothScroll } from "./_components/smooth-scroll";

const lufga = Local_Font({
  src: [
    {
      path: "../../public/fonts/lufga/LufgaThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaBlack.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
});

export const metadata: Metadata = {
  title: "Metrocard Clone",
  description:
    "A clone of the Metrocard app built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={`${lufga.className}  w-full h-full flex flex-col items-center antialiased`}
      >
        <Header />
        {children}
        <SmoothScroll />
      </body>
    </html>
  );
}
