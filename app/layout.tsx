import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nirmatri",
  description: "Nirmatri Frontend",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
