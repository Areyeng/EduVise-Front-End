import { useInstitutionState } from "@/providers/InstitutionProvider";
import { Card, Button, Modal } from "antd";
import Carousel from "react-multi-carousel";
import { useStyles } from "./style";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function ClosingInstitution(): React.ReactNode {
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleApplyClick = (institutionId: string) => {
    // Check if user is logged in
    const isLoggedIn = false; 
    if (isLoggedIn) {
      router.push(`/institution?id=${institutionId}`);
    } else {
      setIsModalVisible(true);
    }
  };
  const logIn = () => {
        router.push(`/login`);
  };
  const register = () => {
    router.push(`/register`);
};
  const handleViewMore = () => {
    setShowAll(true);
    router.push('/institutions');
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
            <>
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
                    {displayedRecords?.map((institution, index) => (
                    <div key={index} style={{ flex: "0 1 calc(33.33% - 20px)", marginBottom: "20px" }}>
                        <Card title={institution.name} bordered={false} className={styles.card}>
                            <div style={{ display: "flex" }}>
                                <div style={{ width: 150, height: 150, background: "lightgray" }}>
                                    <Image src="/default_uni.png" alt="institutionImage" width="150" height="150" objectFit="cover" />
                                </div>
                                <div style={{ flex: 1, marginLeft: "20px" }}>
                                    <p>
                                        Closing Date<br/><b>{formatDate(institution.closingDate)}</b>
                                    </p>
                                    <div style={{ marginTop: "10px" }}>
                                        <Button onClick={() => handleApplyClick(institution.id)} className={styles.button}>APPLY NOW</Button>
                                    </div>
                                </div>
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
            </Carousel>
            <Modal
                className={styles.modal}
                title="Login Required"
                visible={isModalVisible}
                onOk={() => setIsModalVisible(false)}
                onCancel={() => setIsModalVisible(false)}
                footer={[
                    <Button key="submit" className={styles.button} onClick={() => logIn()}>
                      Login
                    </Button>,
                     <Button key="submit" className={styles.button} onClick={() => register()}>
                      Register
                   </Button>
                    ]}
                    
            >
                <p>Please log in or create account to apply.</p>
            </Modal>
            </>
            

  );
}
