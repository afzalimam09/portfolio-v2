import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Afzal Imam SDE",
    description: "Afzal Imam Software Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <main>
                    <Sidebar />
                    <div className="main-content">
                        <Navbar />
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
