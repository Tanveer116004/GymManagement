// "use client";
import type { Metadata } from "next";
import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
// import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitLife Gym",
  description: "Your ultimate fitness destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  // const isAuthRoute = pathname.startsWith("/login")

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {!isAuthRoute && <Navbar />}
        <main className="flex-grow-1">{children}</main>
        {!isAuthRoute && <Footer />} */}
        {children}
      </body>
    </html>
  );
}
