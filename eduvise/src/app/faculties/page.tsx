'use client'
import Image from "next/image";
import styles from "./style.module.css";
import SearchBar from "@/components/SearchBar";
import { useContext, useEffect, useState } from "react";
import FacultyCard from "@/components/FacultyCard";
import { FacultyActionsContext } from "@/providers/FacultyProvider/context";

export default function AllFaculties(): React.ReactNode {
    const { GetAllFaculties } = useContext(FacultyActionsContext);

    useEffect(() => {
        try {
                GetAllFaculties().then(() => {
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
                        <p>FACULTIES</p>
                    </div>
                    <FacultyCard/>
                </div>
            </div>
        </div>
  );
}
