import { useInstitutionState } from "@/providers/InstitutionProvider";
import { Card, Button } from "antd";
import { useStyles } from "./style";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function InstitutionCard(): React.ReactNode {
  const { institutions } = useInstitutionState();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const { styles, cx } = useStyles();
  const [showAll, setShowAll] = useState(currentPath === '/explore');
  const displayedRecords = showAll || currentPath === '/institutions' ? institutions : institutions?.slice(0, 3);
  const [imageUrls, setImageUrls] = useState<string[]>([
    "/up_emblem.jfif",
    "/uct_emblem.jpg",
    "/wits_emblem.jpg",

  ]);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleApplyClick = (institutionId: string) => {
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

  function formatDate(dateString: string): string {
    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Format the date
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div style={{ background: "", padding: "30px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {displayedRecords?.map((institution, index) => (
          <div key={index} style={{ flex: "0 1 calc(33.33% - 20px)", marginBottom: "20px" }}>
            <Card title={institution.name} bordered={false} className={styles.card}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <p>{getFirstSentence(institution.description)}</p>
                  <p>
                    Opening Date: <b>{formatDate(institution.openingDate)}</b>
                  </p>
                  <p>
                    Closing Date: <b>{formatDate(institution.closingDate)}</b>
                  </p>
                </div>
                <div style={{ width: 150, height: 150, background: "lightgray", marginLeft: "20px" }}>
                  <Image src="/default_uni.png" alt="instutionImage" width="150" height="150" objectFit="cover" />
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
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <Button onClick={handleViewMore} className={styles.button}>View More</Button>
        </div>
      )}
    </div>
  );
}
