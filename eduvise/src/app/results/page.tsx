'use client'
import style from "./style.module.css";
import { useStyles } from "./style";
import { useRouter } from 'next/navigation';
import { Button } from "antd";
import { useFacultyState } from "@/providers/FacultyProvider";
import SideNav from "@/components/SideNav";

export default function Results(): React.ReactNode {
  const { faculties } = useFacultyState();
  const router = useRouter();
  const { styles, cx } = useStyles();
  

  const handleApplyClickCourses = (id:string)=>{
    router.push(`/courses?id=${id}`);
  }

  return (
    <>
    
    <div className={style.container}>
      <div className={style.heading}>
        <h1>YOUR RESULTS ARE IN</h1>
      </div>
      <div className={style.content}>
        <p className={style.firstText}>Based on your responses to the career assessment, you might want to consider a career in one of the following faculties:</p>
        <div className={style.answers}>
          {faculties && faculties.map((faculty, index) => (
            <div key={index} className={style.answer}>
              <h2>{faculty.name}</h2>
              <p>Required Subjects: {faculty.requiredSubjects}</p>
              <Button onClick={() => handleApplyClickCourses(faculty.id)} className={styles.button}>SHOW POSSIBLE COURSES</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
}
