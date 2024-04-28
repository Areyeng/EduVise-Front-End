'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Institution from "./institutions/page";
import { InstitutionProvider } from "@/providers/InstitutionProvider";
import { FacultyProvider } from "@/providers/FacultyProvider";
import { CourseProvider } from "@/providers/CourseProvider";
import { FundingProvider } from "@/providers/FundingProvider";
import { EventProvider } from "@/providers/EventProvider";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <InstitutionProvider>
      <FacultyProvider>
        <CourseProvider>
          <FundingProvider>
            <EventProvider>
              <html lang="en">
                <body className={inter.className}>
                  <NavBar/>
                  {children}
                </body>
              </html>
            </EventProvider>
          </FundingProvider>
        </CourseProvider>
      </FacultyProvider>
    </InstitutionProvider>
  );
}
