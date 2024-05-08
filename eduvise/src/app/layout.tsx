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
import { QuestionProvider } from "@/providers/QuestionProvider";
import { AnswerProvider } from "@/providers/ResponseProvider";
import { LearnerInfoProvider } from "@/providers/LearnerProvider";
import { SavedInstitutionProvider } from "@/providers/LearnerInstitution";
import { SavedFundingProvider } from "@/providers/LearnerFunding";
import { SavedEventProvider } from "@/providers/LearnerEvent";
import { SavedCourseProvider } from "@/providers/LearnerCourse";



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <RegisterProvider>
        <LearnerInfoProvider>
          <InstitutionProvider>
            <FacultyProvider>
              <CourseProvider>
                <FundingProvider>
                  <EventProvider>
                    <AnswerProvider>
                      <QuestionProvider>
                        <SavedInstitutionProvider>
                          <SavedFundingProvider>
                            <SavedEventProvider>
                              <SavedCourseProvider>
                                <html lang="en">
                                  <body className={inter.className}>
                                    <NavBar/>
                                    {children}
                                    <AppFooter/>
                                  </body>
                                </html>
                              </SavedCourseProvider>
                            </SavedEventProvider>
                          </SavedFundingProvider>
                        </SavedInstitutionProvider>
                      </QuestionProvider>
                    </AnswerProvider>
                  </EventProvider>
                </FundingProvider>
              </CourseProvider>
            </FacultyProvider>
          </InstitutionProvider>
        </LearnerInfoProvider>
      </RegisterProvider>
    </AuthProvider>
     
    
  );
}
