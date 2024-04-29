'use client'
import { useContext, useEffect } from "react";
import styles from "./style.module.css";
import { useStyles } from "./style";
import { InstitutionActionsContext } from "@/providers/InstitutionProvider/context";
import { useInstitutionState } from "@/providers/InstitutionProvider";
import { useRouter } from 'next/navigation';
import { Button } from "antd";

export default function Institution(): React.ReactNode {
  const { GetInstitution } = useContext(InstitutionActionsContext);
  const { institution } = useInstitutionState();
  const { push } = useRouter();
  
  const handleStartAssessment = () => {
    push('/phase_selection');
  };
  
  return (
    <>
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.text}>Unlock Your Future: Take The Career Assessment Now! Discover your strengths, preferences, and potential career paths with our comprehensive assessment. Start exploring today!</p>
                <Button onClick={handleStartAssessment} className={styles.button}>Start Assessment</Button>
            </div>
        </div>
    </>
  );
}
