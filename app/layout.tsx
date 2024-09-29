import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upskillect",
  description: "UpSkillect empowers you to gain skills and knowledge on your own terms! We offer a seamless and personalized training experience that fits your schedule and learning style.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
