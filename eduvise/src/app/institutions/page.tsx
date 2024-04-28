'use client'
import styles from "./style.module.css";
import SideNav from "@/components/SideNav";




export default function Institution(): React.ReactNode {
  
  return (
        <>
          <SideNav/>
            <div className={styles.container}>
              <div className={styles.heading}>
                <p>University Name</p>
              </div>
              <div className={styles.details}>
                <div className={styles.image}>
                  {/* <Image src="/institution.jpg" width="1000" height="300" alt="eduvise-logo"  /> */}
                </div>
              </div>
              <div className={styles.links}>
                <div className={styles.link}>
                  <p>Explore Programmes</p>
                </div>
                <div className={styles.link}>
                  <p>View 2024 Yearbook</p>
                </div>
                <div className={styles.link}>
                  <p>Apply 2025</p>
                </div>
              </div>
          
            </div>
        </>
  );
}
