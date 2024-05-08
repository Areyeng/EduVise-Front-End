'use client';

import { useInstitutionState } from "@/providers/InstitutionProvider";
import { InstitutionActionsContext } from "@/providers/InstitutionProvider/context";
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import { useStyles } from "./style";
import { Button } from "antd";
import { useLearnerInfoState } from "@/providers/LearnerProvider";
import { InfoActionsContext } from "@/providers/LearnerProvider/context";
import { SavedInstitutionActionsContext } from "@/providers/LearnerInstitution/context";
import { SavedInstitution } from "@/providers/LearnerInstitution/interface";
import Link from "next/link";
import Image from "next/image";


const savedIds :SavedInstitution={
  learnerId:'',
  institutionId:''
}
export default function Institution(): React.ReactNode {
  const { styles, cx } = useStyles();
  const { GetInstitution } = useContext(InstitutionActionsContext);
  const { AddInstitution} = useContext(SavedInstitutionActionsContext);
  const { institution } = useInstitutionState();
  const { GetLearnerInfo } = useContext(InfoActionsContext);
  const { info } = useLearnerInfoState();
  const router= useRouter();
  const [savedIds, setSavedIds] = useState<SavedInstitution>({
    learnerId: '',
    institutionId: ''
  });
 
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const InstitutionId = searchParams.get('id') as string;
   
    
    const fetchInstitution = async () => {
      try {
        if (InstitutionId) {
            GetInstitution(InstitutionId);
            GetLearnerInfo();
        }
      } catch (error) {
        console.error('Error fetching institution:', error);
      }
    };

    fetchInstitution();
  }, []);

  const handleSaveInstitution = (id: string) => {
    if (!info) {
      console.error('Info is not available.');
      return;
    }

    const newSavedIds: SavedInstitution = {
      learnerId: info.id,
      institutionId: id
    };
    AddInstitution(newSavedIds);
    
  };
  const handleFindFunding = () => {
    router.push('/fundings')
    
  };
  const returnBack = () => {
    router.push('/institutions')
    
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.backgroundImage}>
            <Image src="/college.jpg" width="1520" height="370" alt="eduvise-logo"  />
          </div>
          <div className={style.backgroundDiv}>
            <h1 className={style.topHeading}>{institution?.name}</h1>
          </div>
          <div className={style.institutionInfo}>
              <div className={style.institutionStatus}>
                <div className={style.status}>
                  {institution?.accreditation && (
                    <p className={style.statusItem}>
                      <span className={style.statusLabel}>Accreditation:</span> {institution?.accreditation}
                    </p>
                  )}
                  {institution?.ranking && (
                    <p className={style.statusItem}>
                      <span className={style.statusLabel}>Ranking:</span> {institution?.ranking}
                    </p>
                  )}
                  {institution?.passRate && (
                    <p className={style.statusItem}>
                      <span className={style.statusLabel}>Pass Rate:</span> {institution?.passRate}%
                    </p>
                )}
                </div>
              </div>
              <div className={style.line}></div>
              <div className={style.institutionLinks}>
                <h2 className={style.infoTitle}></h2>
                <div className={style.buttonContainer}>
                    <Button className={styles.button}>
                      {institution?.programmesLink && (
                        <Link href={institution?.programmesLink} target="_blank" rel="noopener noreferrer">View Available Programmes</Link>
                      )}
                    </Button>
                </div>
                <div className={style.buttonContainer}>
                    <Button className={styles.button}>
                      {institution?.yearbookLink && (
                        <Link href={institution?.yearbookLink} target="_blank" rel="noopener noreferrer">View Yearbooks For Programmes</Link>
                      )}
                    </Button>
                </div>
                <div className={style.buttonContainer}>
                    <Button className={styles.button}>
                      {institution?.applicationLink && (
                        <Link href={institution?.applicationLink} target="_blank" rel="noopener noreferrer">Apply Today</Link>
                      )}
                    </Button>
                </div>
                <div className={style.buttonContainer}>
                    <Button 
                    className={styles.button} 
                    onClick={() =>  handleSaveInstitution(institution?.id ?? "")}
                    >
                    {institution?.applicationLink && (
                      <Link href={institution?.applicationLink} target="_blank" rel="noopener noreferrer">Save</Link>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          <div className={style.institutionLogo}>
            <Image src="/default_uni.png" width="400" height="400" objectFit="cover" alt="eduvise-logo" />
          </div>
        </div>
        <Button 
          className={styles.fundingButton} 
          onClick={() =>  handleFindFunding()}
        >
        {institution?.applicationLink && (
            <Link href={institution?.applicationLink} target="_blank" rel="noopener noreferrer">FIND FUNDING</Link>
        )}
        </Button>
        <Button 
          className={styles.fundingButton} 
          onClick={() =>  returnBack()}
        >
          BACK
        </Button>
      </div>
    </>
  );
}


