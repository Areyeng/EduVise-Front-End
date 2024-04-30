'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import AppFooter from "@/components/Footer";
import { InstitutionProvider } from "@/providers/InstitutionProvider";
import { FacultyProvider } from "@/providers/FacultyProvider";
import { CourseProvider } from "@/providers/CourseProvider";
import { FundingProvider } from "@/providers/FundingProvider";
import { EventProvider } from "@/providers/EventProvider";
import { RegisterProvider } from "@/providers/RegisterAuth";
import { AuthProvider } from "@/providers/AuthProvider";



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <RegisterProvider>
        <InstitutionProvider>
          <FacultyProvider>
            <CourseProvider>
              <FundingProvider>
                <EventProvider>
                  <html lang="en">
                    <body className={inter.className}>
                      <NavBar/>
                      {children}
                      <AppFooter/>
                    </body>
                  </html>
                </EventProvider>
              </FundingProvider>
            </CourseProvider>
          </FacultyProvider>
        </InstitutionProvider>
      </RegisterProvider>
    </AuthProvider>
    
    
  );
}
