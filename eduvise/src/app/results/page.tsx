'use client'
import { useContext, useEffect } from "react";
import styles from "./style.module.css";
import { InstitutionActionsContext } from "@/providers/InstitutionProvider/context";
import { useInstitutionState } from "@/providers/InstitutionProvider";
import { useRouter } from 'next/navigation';
import { Button } from "antd";

export default function Institution(): React.ReactNode {
  const { GetInstitution } = useContext(InstitutionActionsContext);
  const { institution } = useInstitutionState();
  const { push } = useRouter();
  
  
  const handlePhaseClick = (phase: string) => {
    push(`/assessment?phase=${phase}`);
  };
  return (
    <>
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>YOUR RESULTS ARE IN</h1>
            </div>
            <div className={styles.content}>
                <p className={styles.firstText}>Based on your responses to the career assessment, you might want to consider a career in one of the following faculties:</p>
            </div>
            <div className={styles.phases} onClick={() => handlePhaseClick("phase1")}>
                <div className={styles.phase1}>
                    Senior Phase (Grade 8 - 9)
                </div>
                <div className={styles.phase2} onClick={() => handlePhaseClick("phase2")}>
                     FET(Grade 10 -12)
                </div>
            </div>
        </div>
    </>
  );
}
