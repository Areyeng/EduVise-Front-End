'use client'
import Image from "next/image";
import styles from "./style.module.css";
import SearchBar from "@/components/SearchBar";
import { useContext, useEffect, useState } from "react";
import { FundingActionsContext } from "@/providers/FundingProvider/context";
import FundingCard from "@/components/FundingCard";

export default function AllFundings(): React.ReactNode {
    const { GetAllFundings } = useContext(FundingActionsContext);

    useEffect(() => {
        try {
                GetAllFundings().then(() => {
            });

        }catch (error) {
                console.error('Error fetching all faculties:', error);
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
                        <p>FUNDING</p>
                    </div>
                    <FundingCard/>
                </div>
            </div>
        </div>
  );
}
