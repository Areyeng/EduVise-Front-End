import { useFundingState } from "@/providers/FundingProvider";
import { Card, Button, Collapse } from "antd";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useStyles } from "./style";

const { Panel } = Collapse;

export default function FundingCard(): React.ReactNode {    
    const { styles, cx } = useStyles();
    const { fundings } = useFundingState();
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState("");
    const [showAll, setShowAll] = useState(currentPath === '/explore');
    const displayedRecords = showAll || currentPath === '/fundings' ? fundings : fundings?.slice(0, 3);

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);
    const handleApplyClick = (institutionId:string) => {
        //if logged in redirect to external funding page, else request them to log in
    };
    const handleViewMore = () => {
        setShowAll(true);
        router.push('/fundings');
    };
  
    return (
        <div style={{ background: "", padding: "30px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {displayedRecords?.map((funding, index) => (
            <div key={index} style={{ flex: "0 1 calc(33.33% - 20px)", marginBottom: "20px" }}>
                <Card title={funding?.name} bordered={false} style={{ width: "100%", minHeight: '150px', zIndex: 1 }}>
                <Collapse ghost style={{ position: 'relative', zIndex: 2 }}> 
                    <Panel header="View More Information" key="1">
                        <p>{funding?.description}</p>
                        <p><b>Institution Criteria</b>  {funding?.institutionCriteria}</p>
                        <p><b>Faculty Criteria</b>  {funding?.facultyCriteria}</p>
                        <p><b>Mark Criteria</b>  {funding?.markCriteria}</p>
                        <p><b>Annual Amount</b> R{funding?.annualAmount}</p>
                        <p><b>Duration</b>  {funding?.duration} year</p>
                        <p><b>Opening Date</b>  {funding?.openingDate}</p>
                        <p><b>Closing Date</b>  {funding?.closingDate}</p>
                        <div style={{ marginTop: "10px", margin:'0 auto' }}>
                            <Button onClick={() => handleApplyClick(funding.id)} className={styles.button}>APPLY NOW</Button>
                        </div>
                    </Panel>
                </Collapse>
                </Card>
            </div>
            ))}
        </div>
        {currentPath === '/explore' && fundings && fundings.length > 3 && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
            <Button onClick={handleViewMore} className={styles.button}>View More</Button>
            </div>
        )}
        </div>
    );
}
