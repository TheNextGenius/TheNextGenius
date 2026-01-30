import type { Metadata } from "next";
import { Cinzel, Roboto_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay Shukla | The Next Genius",
  description: "Solo Leveling Themed Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${robotoMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
