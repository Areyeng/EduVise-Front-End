'use client'
import Image from "next/image";
import styles from "./style.module.css";
import SearchBar from "@/components/SearchBar";
import { useContext, useEffect, useState } from "react";
import FacultyCard from "@/components/FacultyCard";
import { FacultyActionsContext } from "@/providers/FacultyProvider/context";
import ClosingInstitution from "@/components/ClosingInstitution";
import { EventActionsContext } from "@/providers/EventProvider/context";
import { useFacultyState } from "@/providers/FacultyProvider";
import { useFundingState } from "@/providers/FundingProvider";
import { FundingActionsContext } from "@/providers/FundingProvider/context";
import { useInstitutionState } from "@/providers/InstitutionProvider";
import { InstitutionActionsContext } from "@/providers/InstitutionProvider/context";
import { useEventState } from "@/providers/EventProvider";
import ClosingEvents from "@/components/ClosingEvents";
import ClosingFunding from "@/components/ClosingFunding";

export default function Deadlines(): React.ReactNode {
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
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.backgroundImage}>
                    <Image src="/university-bg.jpg" width="1520" height="470" alt="eduvise-logo" />
                </div>
                <div className={styles.backgroundDiv}>
                    <h1 className={styles.heading}>UPCOMING DEADLINES </h1>
                    <SearchBar />
                </div>
            </div>
            <div className={styles.rows}>
                <div className={styles.heading}>
                  <p>INSTITUTIONS</p>
                </div>
                <ClosingInstitution/>
            </div>
            <div className={styles.rows}>
                <div className={styles.heading}>
                  <p>FUNDING</p>
                </div>
                <ClosingFunding/>
            </div>
            <div className={styles.rows}>
                <div className={styles.heading}>
                  <p>EVENTS</p>
                </div>
                <ClosingEvents/>
            </div>
        </div>
  );
}
