'use client'
import Image from "next/image";
import styles from "./style.module.css";
import SearchBar from "@/components/SearchBar";
import { useContext, useEffect, useState } from "react";
import { InstitutionActionsContext } from "@/providers/InstitutionProvider/context";
import { useInstitutionState } from "@/providers/InstitutionProvider";
import InstitutionCard from "@/components/InstitutionCard";
import { FacultyActionsContext } from "@/providers/FacultyProvider/context";
import { useFacultyState } from "@/providers/FacultyProvider";
import FacultyCard from "@/components/FacultyCard";
import { FundingActionsContext } from "@/providers/FundingProvider/context";
import { useFundingState } from "@/providers/FundingProvider";
import FundingCard from "@/components/FundingCard";
import { EventActionsContext } from "@/providers/EventProvider/context";
import EventCarousel from "@/components/EventCarousel";

export default function Explore(): React.ReactNode {
  const { GetAllInstitutions } = useContext(InstitutionActionsContext);
  const { GetAllFaculties } = useContext(FacultyActionsContext);
  const { GetAllFundings } = useContext(FundingActionsContext);
  const { GetAllEvents } = useContext(EventActionsContext);
  const { institutions } = useInstitutionState();
  const { faculties } = useFacultyState();
  const { fundings} = useFundingState();

  useEffect(() => {
    try {
      GetAllInstitutions().then(() => {
       
      });
      GetAllFaculties().then(() => {
       
      });
      GetAllFundings().then(() => {
       
      });
      GetAllEvents().then(() => {
       
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
          <h1 className={styles.heading}>EXPLORE</h1>
          <SearchBar />
        </div>
      </div>
      <div>
        <div>
          <div className={styles.heading}>
            <p>INSTITUTIONS</p>
          </div>
          <InstitutionCard/>
        </div>
        <div>
          <div className={styles.heading}>
            <p>FACULTIES</p>
          </div>
          <FacultyCard/>
        </div>
        <div>
          <div className={styles.heading}>
            <p>FUNDING</p>
          </div>
          <FundingCard/>
        </div>
        <div>
          <div className={styles.heading}>
            <p>EVENTS</p>
          </div>
          <EventCarousel/>
        </div>
      </div>
    </div>
  );
}
