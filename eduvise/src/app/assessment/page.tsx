'use client'
import { useContext, useEffect } from "react";
import styles from "./style.module.css";
import { useRouter } from 'next/navigation';
import { Button } from "antd";
/*
 
*/
const answers = [
    {
        id: 1,
        answer: "Task 1",
    },
    {
        id: 2,
        answer: "Task 2",
       
    },
    {
        id: 3,
        answer: "Task 3",
       
    },
    {
      id: 4,
      answer: "Task 4",
  },
  {
      id: 5,
      answer: "Task 5",
  },
]
export default function Assessment(): React.ReactNode {
  
return (
    <>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h1>FIND YOUR CAREER PATH</h1>
                </div>
                <p className={styles.secondText}>Which of the following tasks would you prefer to do regularly?</p>
            </div>
            <div className={styles.answers}>
                {answers.map(answer => (
                <div key={answer.id} className={styles.answer}>
                    <p>{answer.answer}</p>
            </div>
                ))}
                
                <Button className={styles.button}>NEXT QUESTION</Button>
            </div>
        </div>
    </>
  );
}
