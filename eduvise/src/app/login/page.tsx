'use client';
import Image from "next/image";
import styles from "./styles.module.css";
import LoginForm from "@/components/LoginForm";


export default function Login() :React.ReactNode{
    
    return<>
        <div className={styles.divContainer}>
            <div className={styles.leftDiv}>
                <Image className={styles.imageStyle} src="/signup_3.jpg" width="650" height="600"  alt="image-graduates"  />
                <div className={styles.overlay}>
                    <h1 className={styles.signHeading}>Log In</h1>
                    <p className={styles.signText}>Please  enter your details  to access your tailored experience of EduVise.</p>
                </div>
            </div>
            <div className={styles.rightDiv}>
                <div className={styles.heading}><h1>EDUVISE</h1></div>
                <LoginForm/>
            </div>
        </div>
       
    </>
}