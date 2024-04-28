'use client'
import Image from "next/image";
import styles from "./style.module.css";
import SearchBar from "@/components/SearchBar";
import { useContext, useEffect, useState } from "react";
import { InstitutionActionsContext } from "@/providers/InstitutionProvider/context";
import { useInstitutionState } from "@/providers/InstitutionProvider";
import InfoCard from "@/components/Card";

export default function Explore(): React.ReactNode {
  const { GetAllInstitutions } = useContext(InstitutionActionsContext);
  const { institutions } = useInstitutionState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      GetAllInstitutions().then(() => {
        console.log("Institutions fetched",institutions);
       
      });

    } catch (error) {
      console.error('Error fetching all institutions:', error);
    }
  }, []);

  useEffect(() => {
    console.log("state of institutions:", institutions);
    setLoading(false); // Set loading to false once institutions are fetched
  }, [institutions]);

  // Render loading indicator until institutions are fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.backgroundImage}>
          <Image src="/university-bg.jpg" width="1920" height="470" alt="eduvise-logo" />
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
          <InfoCard/>
          {/* <div style={{width:'600px',display:'flex'}}>
            {institutions && institutions.map((institution, index) => (
              <div key={index} style={{backgroundColor:'aqua',width:'300px',margin:'10px'}}>
                <h1>{institution.name}</h1>
                <p>{institution.description}</p>
              </div>
            ))}
          </div> */}
        </div>
        <div>
          <div className={styles.heading}>
            <p>FACULTIES</p>
          </div>

        </div>
        <div>
          <div className={styles.heading}>
            <p>FUNDING</p>
          </div>

        </div>
      </div>
    </div>
  );
}
