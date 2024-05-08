import { useInstitutionState } from "@/providers/InstitutionProvider";
import { Card, Button } from "antd";
import Carousel from "react-multi-carousel";
import { useStyles } from "./style";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useEventState } from "@/providers/EventProvider";

export default function ClosingEvents(): React.ReactNode {
  const { events } = useEventState();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const { styles, cx } = useStyles();
  const [showAll, setShowAll] = useState(currentPath === '/explore');
  const displayedRecords = showAll || currentPath === '/events' ? events : events?.slice(0, 3);
  const [imageUrls, setImageUrls] = useState<string[]>([
    "/up_emblem.jfif",
    "/uct_emblem.jpg",
    "/wits_emblem.jpg",

  ]);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleApplyClick = (institutionId: string) => {
    router.push(`/event?id=${institutionId}`);
  };

  const handleViewMore = () => {
    setShowAll(true);
    router.push('/events');
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
                    {displayedRecords?.map((event, index) => (
                    <div key={index} style={{ flex: "0 1 calc(33.33% - 20px)", marginBottom: "20px" }}>
                        <Card title={event.name} bordered={false} className={styles.card}>
                            <div style={{ display: "flex" }}>
                                <div style={{ width: 150, height: 150, background: "lightgray" }}>
                                    <Image src="/default_event.jpg" alt="eventImage" width="150" height="150" objectFit="cover" />
                                </div>
                                <div style={{ flex: 1, marginLeft: "20px" }}>
                                    <p>
                                        Date<br/> <b>{formatDate(event.date)}</b>
                                    </p>
                                    <div style={{ marginTop: "10px" }}>
                                        <Button onClick={() => handleApplyClick(event.id)} className={styles.button}>SAVE</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    ))}
                </div>
            
            </div>
            </Carousel>
            

  );
}
