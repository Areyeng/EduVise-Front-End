'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel"

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.mainTop}>
                <div className={styles.backgroundImage}>
                    <Image src="/university-bg.jpg" width="1900" height="970" alt="eduvise-logo"  />
                </div>
                <div className={styles.backgroundDiv}>
                </div>
                <div className={styles.logo}>
                    <Image src="/eduvise-home.png" width="500" height="370" alt="eduvise-logo"  />
                    {/* <div className="quote-container">
                        <blockquote className="quote">
                            <p>Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.The best way to predict your future is to create it.</p>
                        </blockquote>
                        <p className="author">Pele</p>
                    </div> */}
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.flex}>
                        <Image src="/landing1.jpg" width="250" height="250" alt="eduvise-logo" className={styles.image}/>
                        <Image src="/landing2.jpg" width="250" height="250" alt="eduvise-logo" className={styles.image}/>
                    </div>
                    <div className={styles.flex}>
                        <Image src="/landing3.jpg" width="250" height="250" alt="eduvise-logo" className={styles.image}/>
                        <Image src="/landing3.jpg" width="250" height="250" alt="eduvise-logo" className={styles.image}/>
                    </div>
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
