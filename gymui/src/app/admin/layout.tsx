import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
    <Navbar/>
    <main className="flex-grow-1">{children}</main>
    <Footer/>
    </>
  )
}
