
import { Card, Button } from "antd";
import Carousel from "react-multi-carousel";
import { useStyles } from "./style";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useFundingState } from "@/providers/FundingProvider";

export default function ClosingInstitution(): React.ReactNode {
  const { fundings } = useFundingState();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const { styles, cx } = useStyles();
  const [showAll, setShowAll] = useState(currentPath === '/explore');
  const displayedRecords = showAll || currentPath === '/fundings' ? fundings : fundings?.slice(0, 3);
  const [imageUrls, setImageUrls] = useState<string[]>([
    "/up_emblem.jfif",
    "/uct_emblem.jpg",
    "/wits_emblem.jpg",

  ]);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleApplyClick = (institutionId: string) => {
    router.push(`/funding?id=${institutionId}`);
  };

  const handleViewMore = () => {
    setShowAll(true);
    router.push('/fundings');
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
  };
  
  return (
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} 
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 600ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >  
            <div style={{ background: "", padding: "30px",marginLeft:"200px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {displayedRecords?.map((funding, index) => (
                    <div key={index} style={{ flex: "0 1 calc(33.33% - 20px)", marginBottom: "20px" }}>
                        <Card title={funding.name} bordered={false} className={styles.card}>
                            <div style={{ display: "flex" }}>
                                <div style={{ width: 150, height: 150, background: "lightgray" }}>
                                    <Image src="/default_funding.svg" alt={`Image ${index}`} width="150" height="150" objectFit="cover" />
                                </div>
                                <div style={{ flex: 1, marginLeft: "20px" }}>
                                    <p>
                                        Closing Date<br/><b>{formatDate(funding.closingDate)}</b>
                                    </p>
                                    <div style={{ marginTop: "10px" }}>
                                        <Button onClick={() => handleApplyClick(funding.id)} className={styles.button}>APPLY NOW</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    ))}
                </div>
                {currentPath === '/explore' && fundings && fundings.length > 3 && (
                <div style={{ marginTop: "10px", textAlign: "center" }}>
                    <Button onClick={handleViewMore} className={styles.button}>View More</Button>
                </div>
                )}
            </div>
            </Carousel>
            

  );
}
