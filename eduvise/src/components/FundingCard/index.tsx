import { useFundingState } from "@/providers/FundingProvider";
import { Card, Button } from "antd";
import { useStyles } from "./style";
import { useRouter } from 'next/navigation';
import { useEffect, useState,useContext} from "react";
import Link from "next/link";
import { useLearnerInfoState } from "@/providers/LearnerProvider";
import { InfoActionsContext } from "@/providers/LearnerProvider/context";
import { SavedFunding } from "@/providers/LearnerFunding/interface";
import { SavedFundingActionsContext } from "@/providers/LearnerFunding/context";


export default function FundingCard(): React.ReactNode {
    const { styles } = useStyles();
    const { fundings } = useFundingState();
    const { GetLearnerInfo } = useContext(InfoActionsContext);
    const { info } = useLearnerInfoState();
    const { AddFunding} = useContext(SavedFundingActionsContext);
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState("");
    const [showAll, setShowAll] = useState(currentPath === '/explore');
    const displayedRecords = showAll || currentPath === '/fundings' ? fundings : fundings?.slice(0, 3);
    const [savedIds, setSavedIds] = useState<SavedFunding>({
      learnerId: '',
      fundingId: ''
    });
    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const handleSaveFunding = (id: string) => {
      if (!info) {
        console.error('Info is not available.');
        return;
      }
  
      const newSavedIds: SavedFunding = {
        learnerId: info.id,
        fundingId: id
      };
      AddFunding(newSavedIds);
      
    };

    const handleViewMore = () => {
        setShowAll(true);
        router.push('/fundings');
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
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                {displayedRecords?.map((funding, index) => (
                    <div
                        key={index}
                        style={{ flex: "0 1 calc(33.33% - 20px)", marginBottom: "20px" }}
                    >
                        <Card
                            title={funding?.name}
                            bordered={false}
                            style={{ width: "100%", minHeight: "260px" }}
                            className={styles.card}
                        >
                            <p>{getFirstSentence(funding?.description)}</p>
                            <p><b>Institution Criteria:</b> {funding?.institutionCriteria}</p>
                            <p><b>Faculty Criteria:</b> {getFirstSentence(funding?.facultyCriteria)}</p>
                            <p><b>Mark Criteria:</b> {funding?.markCriteria}</p>
                            <p><b>Annual Amount:</b> R{funding?.annualAmount}</p>
                            <p><b>Duration:</b> {funding?.duration} years</p>
                            <p><b>Opening Date:</b> {formatDate(funding?.openingDate)}</p>
                            <p><b>Closing Date:</b> {formatDate(funding?.closingDate)}</p>
                            <Button  className={styles.button}>
                            {funding?.fundingLink && (
                               <Link href={funding?.fundingLink} target="_blank" rel="noopener noreferrer">APPLY NOW</Link>
                             )}
                            </Button>
                            <Button 
                            className={styles.button} 
                            onClick={() =>  handleSaveFunding(funding?.id ?? "")}
                            >
                            SAVE
                          </Button>
                        </Card>
                    </div>
                ))}
            </div>
            {currentPath === "/explore" && fundings && fundings.length > 3 && (
                <div style={{ marginTop: "10px", textAlign: "center" }}>
                    <Button onClick={handleViewMore} className={styles.button}>
                        View More
                    </Button>
                </div>
            )}
        </div>
    );
}
