import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Manideep Nera",
  description: "Portfolio of Manideep Nera - Software Developer and Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        {children}
      </body>
    </html>
  );
}
