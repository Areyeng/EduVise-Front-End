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
  
  
  
  return (
    <>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h1>FIND YOUR CAREER PATH</h1>
                </div>
                <p className={styles.secondText}>Which of the following tasks would you prefer to do regularly?</p>
            </div>
            <div className={styles.phases}>
                <div className={styles.phase1}>
                    Task 1
                </div>
                <div className={styles.phase2}>
                    Task 2
                </div>
                <div className={styles.phase1}>
                    Task 3
                </div>
                <div className={styles.phase2}>
                    Task 4
                </div>
                <div className={styles.phase2}>
                    Task 5
                </div>
            </div>
        </div>
    </>
  );
}
