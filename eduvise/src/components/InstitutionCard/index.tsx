import { useInstitutionState } from "@/providers/InstitutionProvider";
import { Card, Button } from "antd";
import { useStyles } from "./style";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function InstitutionCard(): React.ReactNode {
  const { institutions } = useInstitutionState();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const { styles, cx } = useStyles();
  const [showAll, setShowAll] = useState(currentPath === '/explore');
  const displayedRecords = showAll || currentPath === '/institutions' ? institutions : institutions?.slice(0, 3);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleApplyClick = (institutionId:string) => {
    router.push(`/institution?id=${institutionId}`);
  };

  const handleViewMore = () => {
    setShowAll(true);
    router.push('/institutions');
  };
  
  const getFirstSentence = (text: string): string => {
    const periodIndex = text.indexOf('.');
    return periodIndex !== -1 ? text.substring(0, periodIndex + 1) : text;
  };

  return (
    <div style={{ background: "", padding: "30px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {displayedRecords?.map((institution, index) => (
          <div key={index} style={{ flex: "0 1 calc(33.33% - 20px)", marginBottom: "20px" }}>
            <Card title={institution.name} bordered={false} style={{ width: "100%", height: '320px'}}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <p>{getFirstSentence(institution.description)}</p>
                  <p>
                    Opening Date: <b>{institution.openingDate}</b>
                  </p>
                  <p>
                    Closing Date: <b>{institution.closingDate}</b>
                  </p>
                </div>
                <div style={{ width: 150, height: 150, background: "lightgray", marginLeft: "20px" }}>
                  {/* Placeholder square div for image */}
                </div>
              </div>
              <div style={{ marginTop: "10px", marginLeft: '200px', float: 'right' }}>
                <Button onClick={() => handleApplyClick(institution.id)} className={styles.button}>APPLY NOW</Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
      {currentPath === '/explore' && institutions && institutions.length > 3 && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Button onClick={handleViewMore} className={styles.button}>View More</Button>
        </div>
      )}
    </div>
  );
}
