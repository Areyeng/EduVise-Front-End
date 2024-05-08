'use client';
import Image from "next/image";
import styles from "./styles.module.css";
import LoginForm from "@/components/LoginForm";


export default function Login() :React.ReactNode{
    
    return<>
        <div className={styles.divContainer}>
            <div className={styles.leftDiv}>
                <Image className={styles.imageStyle} src="/side.jpg" width="650" height="600"  alt="image-graduates"  />
                <div className={styles.overlay}>
                    {/* <div className={styles.logo}>
                        <Image src="/eduvise-home.png" width="500" height="370" alt="eduvise-logo"  />
                    </div> */}
                </div>
            </div>
            <div className={styles.rightDiv}>
                <div className={styles.heading}><h1>EDUVISE</h1></div>
                <LoginForm/>
            </div>
        </div>
       
    </>
}