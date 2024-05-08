'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel"
import ClosingEvents from "@/components/ClosingEvents";
import ClosingFunding from "@/components/ClosingFunding";
import ClosingInstitution from "@/components/ClosingInstitution";
import { EventActionsContext } from "@/providers/EventProvider/context";
import { FundingActionsContext } from "@/providers/FundingProvider/context";
import { InstitutionActionsContext } from "@/providers/InstitutionProvider/context";
import { useContext, useEffect } from "react";


export default function Home() {
    const { GetAllInstitutionsByClosing } = useContext(InstitutionActionsContext);
    const { GetAllEventsByClosing } = useContext(EventActionsContext);
    const { GetAllFundingsByClosing } = useContext(FundingActionsContext);
 
  
    useEffect(() => {
      try {
        GetAllInstitutionsByClosing().then(() => {
         
        });
        GetAllEventsByClosing().then(() => {
         
        });
        GetAllFundingsByClosing().then(() => {
         
        });
      } catch (error) {
        console.error('Error fetching all institutions:', error);
      }
    }, []);
    return (
        <main className={styles.main}>
            <div className={styles.mainTop}>
                <div className={styles.backgroundImage}>
                    <Image src="/college.jpg" width="1520" height="970" alt="eduvise-logo"  />
                </div>
                <div className={styles.backgroundDiv}>
                </div>
                <div className={styles.logo}>
                    <Image src="/eduvise-home.png" width="500" height="370" alt="eduvise-logo"  />
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.flex}>
                        <Image src="/landing1.jpg" width="250" height="250" alt="eduvise-logo" className={styles.image}/>
                        <Image src="/students.jpg" width="250" height="250" alt="eduvise-logo" className={styles.image}/>
                    </div>
                    <div className={styles.flex}>
                        <Image src="/landing3.jpg" width="250" height="250" alt="eduvise-logo" className={styles.image}/>
                        <Image src="/doctor.jpg" width="250" height="250" alt="eduvise-logo" className={styles.image}/>
                    </div>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.text}>EduVise is your personal guide to discovering your strengths, exploring careers, and accessing top universities. With tailored support, financial aid options, and action plans, you can confidently navigate your educational journey and achieve your goals.</div>
                <div className={styles.carousel}>
                    <Carousel/>
                </div>
            </div>
            <div className={styles.requirements}>
                <h1 className={styles.topHeading}>UPCOMING DEADLINES</h1>
                <div className={styles.rows}>
                    <div className={styles.heading}>
                    <h1>INSTITUTIONS</h1>
                    </div>
                    <ClosingInstitution/>
                </div>
                <div className={styles.rows}>
                    <div className={styles.heading}>
                    <h1>FUNDING</h1>
                    </div>
                    <ClosingFunding/>
                </div>
                <div className={styles.rows}>
                    <div className={styles.heading}>
                    <h1>EVENTS</h1>
                    </div>
                    <ClosingEvents/>
                </div>
            </div>
        </main>
  );
}
