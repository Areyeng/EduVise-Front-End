'use client'
import Image from "next/image";
import styles from "./style.module.css";
import SearchBar from "@/components/SearchBar";
import { useContext, useEffect, useState } from "react";
import { InstitutionActionsContext } from "@/providers/InstitutionProvider/context";
import InstitutionCard from "@/components/InstitutionCard";

export default function AllInstitutions(): React.ReactNode {
    const { GetAllInstitutions } = useContext(InstitutionActionsContext);

    useEffect(() => {
        try {
                GetAllInstitutions().then(() => {
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
            </div>
        </div>
  );
}
