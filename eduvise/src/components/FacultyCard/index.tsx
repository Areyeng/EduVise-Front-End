import { useInstitutionState } from "@/providers/InstitutionProvider";
import { useFacultyState } from "@/providers/FacultyProvider";
import { Card, Button } from "antd";
import { useStyles } from "./style";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";


export default function FacultyCard(): React.ReactNode {
  const { faculties } = useFacultyState();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const { styles, cx } = useStyles();
  const [showAll, setShowAll] = useState(currentPath === '/explore');
  const displayedRecords = showAll || currentPath === '/faculties' ? faculties : faculties?.slice(0, 3);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleApplyClick = (institutionId:string) => {
    router.push(`/faculty?id=${institutionId}`);
  };

  const handleViewMore = () => {
    setShowAll(true);
    router.push('/faculties');
  };
  
  const getFirstSentence = (text: string): string => {
    const periodIndex = text.indexOf('.');
    return periodIndex !== -1 ? text.substring(0, periodIndex + 1) : text;
  };

  return (
    <div style={{ background: "", padding: "30px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {displayedRecords?.map((faculty, index) => (
          <div key={index} style={{ flex: "0 1 calc(33.33% - 20px)", marginBottom: "20px" }}>
            <Card title={faculty.name} bordered={false} style={{ width: "100%", height: '200px' }}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <p>{getFirstSentence(faculty.description)}</p>
                </div>
              </div>
              <div style={{ marginTop: "10px", margin:'0 auto' }}>
                <Button onClick={() => handleApplyClick(faculty.id)} className={styles.button}>WHERE TO STUDY</Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
      {currentPath === '/explore' && faculties && faculties.length > 3 && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Button onClick={handleViewMore} className={styles.button}>View More</Button>
        </div>
      )}
    </div>
  );
}
