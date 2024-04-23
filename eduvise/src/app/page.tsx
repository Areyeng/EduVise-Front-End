'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel"
import { Button } from "antd";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
      <main className={styles.main}>
          {/* <Image src="/university-bg.jpg" width="1900" height="1020" alt="eduvise-logo" /> */}
          <NavBar/>
            <div className={styles.logo}>
                <Image src="/eduvise-home.png" width="500" height="370" alt="eduvise-logo" />
                <Button className={styles.start}>
                     Get Started
                </Button>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.image1}>
                    <Image src="/landing1.jpg" width="400" height="200" alt="eduvise-logo" />
                </div>
                <div className={styles.image2}>
                    <Image src="/landing2.jpg" width="400" height="200" alt="eduvise-logo" />
                </div>
                <div className={styles.image3}>
                    <Image src="/landing3.jpg" width="400" height="200" alt="eduvise-logo" />
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.text}>EduVise is your personal guide to discovering your strengths, exploring careers, and accessing top universities. With tailored support, financial aid options, and action plans, you can confidently navigate your educational journey and achieve your goals.</div>
                <div className={styles.carousel}>
                  <Carousel/>
                </div>
            </div>
          <div className={styles.requirements}>

          </div>
        
      </main>
  );
}
