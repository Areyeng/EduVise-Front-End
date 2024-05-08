'use client'
import Image from "next/image";
import style from "./style.module.css";
import { useRouter } from 'next/navigation';
import { useStyles } from "./style";
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
import { Button } from "antd";

export default function Explore(): React.ReactNode {
  const { GetAllInstitutions } = useContext(InstitutionActionsContext);
  const { GetAllFaculties } = useContext(FacultyActionsContext);
  const { GetAllFundings } = useContext(FundingActionsContext);
  const { GetAllEvents } = useContext(EventActionsContext);
  const { institutions } = useInstitutionState();
  const { faculties } = useFacultyState();
  const { fundings} = useFundingState();
  const { styles, cx } = useStyles();
  const router = useRouter();
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
  const handleSubmit = (values:any) => {
    router.push('/assessment');
  };
  return(
          <div className={style.container}>
            <div className={style.top}>
              <div className={style.backgroundImage}>
                <Image src="/college.jpg" width="1520" height="370" alt="eduvise-logo"  />
              </div>
              <div className={style.backgroundDiv}>
                <h1 className={style.topHeading}>EXPLORE</h1>
                <SearchBar />
              </div>
            </div>
            <div className={style.assessment}>
              <div className={style.start}>
                  <p className={style.startText}>Unlock Your Future: Take The Career Assessment Now! Discover your strengths, preferences, and potential career paths with our comprehensive assessment. Start exploring today!</p>
                  <Button onClick={handleSubmit} className={styles.button}>Start Assessment</Button>
              </div>
            </div>
            <div className={style.allInfo}>
              <div>
                <div className={style.heading}>
                  <p>INSTITUTIONS</p>
                </div>
                <InstitutionCard/>
              </div>
              <div>
                <div className={style.heading}>
                  <p>FACULTIES</p>
                </div>
                <FacultyCard/>
              </div>
              <div>
                <div className={style.heading}>
                  <p>FUNDING</p>
                </div>
                <FundingCard/>
              </div>
              <div>
                <div className={style.heading}>
                  <p>EVENTS</p>
                </div>
                <EventCarousel/>
              </div>
            </div>
          </div>
  );
}
