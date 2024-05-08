import { Card, Button } from "antd";
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from "react";
import { useCourseState } from "@/providers/CourseProvider";
import { CourseActionsContext } from "@/providers/CourseProvider/context";
import { SavedCourse } from "@/providers/LearnerCourse/interface";
import { useLearnerInfoState } from "@/providers/LearnerProvider";
import { InfoActionsContext } from "@/providers/LearnerProvider/context";
import { useSavedCourseActions } from "@/providers/LearnerCourse";
import style from "./style.module.css";
import Image from "next/image";
import { useStyles } from "./style";
import { useFacultyActions, useFacultyState } from "@/providers/FacultyProvider";

export default function CourseCard(): React.ReactNode {
  const { AddCourse } = useSavedCourseActions();
  const { GetFaculty } = useFacultyActions();
  const { courses } = useCourseState();
  const { faculty} = useFacultyState();
  const router = useRouter();
  const { GetLearnerInfo } = useContext(InfoActionsContext);
  const { info } = useLearnerInfoState();
  const { GetCoursesByFacultyId } = useContext(CourseActionsContext);
  const { styles, cx } = useStyles();
  const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const courseId = searchParams.get('id');
    const fetchCourses = async () => {
      try {
        if (courseId) {
          GetFaculty(courseId);
          GetCoursesByFacultyId(courseId);
          GetLearnerInfo();
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleApplyClick = (id: string) => {
    router.push(`/institutions`);
  };

  const handleSaveCourse = (id: string) => {
    if (!info) {
      console.error('Info is not available.');
      return;
    }
    const newSavedCourse: SavedCourse = {
      learnerId: info.id,
      courseId: id
    };
    AddCourse(newSavedCourse);
  };

  const toggleExpand = (id: string) => {
    setExpandedCourses(prev => {
      if (prev.includes(id)) {
        return prev.filter(courseId => courseId !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  
  const isCourseExpanded = (id: string) => {
    return expandedCourses.includes(id);
  };

  const getFirstSentence = (text: string): string => {
    const periodIndex = text.indexOf('.');
    return periodIndex !== -1 ? text.substring(0, periodIndex + 1) : text;
  };

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.backgroundImage}>
          <Image src="/college.jpg" width="1520" height="370" alt="eduvise-logo"  />
        </div>
        <div className={style.backgroundDiv}>
          <h1 className={style.topHeading}>{faculty?.name}</h1>
        </div>
        <div className={style.summary}><h1>Available Courses</h1></div>
        <div className={style.image}></div>
        <div style={{ background: "", padding: "30px" }}>
          <div>
            {courses?.map((course, index) => (
              <div key={index} style={{ flex: "0 1 calc(33.33% - 20px)", marginBottom: "20px" }}>
                <Card title={course.name} bordered={false} style={{ width: "100%", height: 'auto' }} className={styles.card}>
                  <div className={`${style.infoContainer} ${isCourseExpanded(course.id) ? style.open : ''}`}>
                    <div className={style.infoColumn}>
                      <h3 className={style.infoHeader}>Description</h3>
                      <p>{getFirstSentence(course.description)}</p>
                    </div>
                    <div className={style.verticalLine}></div>
                    <div className={style.infoColumn}>
                      <h3 className={style.infoHeader}>Job Titles</h3>
                      <p>{course.jobTitles}</p>
                    </div>
                    <div className={style.verticalLine}></div>
                    <div className={style.infoColumn}>
                      <h3 className={style.infoHeader}>Average APS</h3>
                      <p>{course.avgAPS}</p>
                    </div>
                    <div className={style.verticalLine}></div>
                    <div className={style.infoColumn}>
                      <h3 className={style.infoHeader}>Average Tuition</h3>
                      <p>{course.avgTuition}</p>
                    </div>
                    <div className={style.verticalLine}></div>
                    <div className={style.infoColumn}>
                      <h3 className={style.infoHeader}>Average Duration To Complete </h3>
                      <p>{course.avgDuration} years</p>
                    </div>
                    <div className={style.buttonContainer}>
                      <Button onClick={() => handleApplyClick(course.facultyId)} className={styles.button}>WHERE TO STUDY</Button>
                      <Button onClick={() => handleSaveCourse(course.id)} className={styles.button}>SAVE</Button>
                    </div>
                  </div>
                  <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                  <Button onClick={() => toggleExpand(course.id)} className={style.arrowButton}>
                    <span className={isCourseExpanded(course.id) ? style.arrowUp : style.arrowDown}></span>
                  </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

