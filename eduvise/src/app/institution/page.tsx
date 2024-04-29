'use client'
import { useContext, useEffect } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { InstitutionActionsContext } from "@/providers/InstitutionProvider/context";
import { useInstitutionState } from "@/providers/InstitutionProvider";
import { useRouter } from 'next/navigation';

export default function Institution(): React.ReactNode {
  const { GetInstitution } = useContext(InstitutionActionsContext);
  const { institution } = useInstitutionState();
  const { push } = useRouter();

  useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const InstitutionId = searchParams.get('id') as string;
      console.log('Institution Id retrieved:', InstitutionId);
      const fetchInstitution = async () => {
        try {
          if (InstitutionId) {
              GetInstitution(InstitutionId);
          }
        } catch (error) {
          console.error('Error fetching institution:', error);
        }
      };

    fetchInstitution();
  }, []);

  const handleBack = () => {
    push('/explore');
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>

        </div>
        <div className={styles.mid}>

        </div>
        {/* <div className={styles.top}>
          <div className={styles.backgroundImage}>
            <Image src="/university-bg.jpg" width="1100" height="470" alt="eduvise-logo" />
          </div>
          <div className={styles.backgroundDiv}>
            <h1 className={styles.heading}>{institution?.name}</h1>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <div className={styles.flex}>
              <div className={styles.topInfo}>{institution?.accreditation}</div>
              <div className={styles.topInfo}>{institution?.ranking}</div>
              <div className={styles.topInfo}>{institution?.passRate}</div>
              </div>
          </div>
        </div> */}
      
      </div>
    </>
  );
}

