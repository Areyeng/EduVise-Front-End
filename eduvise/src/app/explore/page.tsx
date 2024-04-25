import Image from "next/image";
import styles from "./style.module.css";
import SearchBar from "@/components/SearchBar";
import InfoCard from "@/components/Card";


export default function Explore():React.ReactNode {

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.backgroundImage}>
                    <Image src="/university-bg.jpg" width="1920" height="470" alt="eduvise-logo"  />
                </div>
                <div className={styles.backgroundDiv}>
                    <h1 className={styles.heading}>EXPLORE</h1>
                    <SearchBar/>
                </div>
            </div>
            <div>
            <div className={styles.heading}>
                <p>INSTITUTIONS</p>
            </div>
                <InfoCard/>
            <div className={styles.heading}>
                <p>FACULTIES</p>
            </div>
                <InfoCard/>
            <div className={styles.heading}>
                <p>FUNDING</p>
            </div>
                <InfoCard/>
            </div>
        </div>
    );
};
