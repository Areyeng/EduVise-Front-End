'use client';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEventState } from "@/providers/EventProvider";
import { Button, Card } from "antd";
import { SavedEventActionsContext } from "@/providers/LearnerEvent/context";
import { useContext, useEffect } from "react";
import { useSavedEventState } from "@/providers/LearnerEvent";
import { InfoActionsContext } from "@/providers/LearnerProvider/context";
import { useLearnerInfoState } from "@/providers/LearnerProvider";
import { SavedEvent } from "@/providers/LearnerEvent/interface";
import { useStyles } from "./style";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
};

export default function EventCarousel() :React.ReactNode{
    const { events } = useEventState();
    const { AddEvent } = useContext(SavedEventActionsContext);
    const { returnedEvents } = useSavedEventState();
    const { GetLearnerInfo } = useContext(InfoActionsContext);
    const { info } = useLearnerInfoState();
    const { styles, cx } = useStyles();
    useEffect(() => {
        GetLearnerInfo()
    }, [])

    const getFirstSentence = (text: string): string => {
        const periodIndex = text.indexOf('.');
        return periodIndex !== -1 ? text.substring(0, periodIndex + 1) : text;
    };
    const handleSaveEvent = (id: string) => {
        if (!info) {
            console.error('Info is not available.');
            return;
        }

        const newSavedIds: SavedEvent = {
        learnerId: info.id,
        eventId: id
        };
        console.log("about to save");
        AddEvent(newSavedIds);
        
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
            {events?.map((event, index) => (
            <div key={index} style={{ flex: "0 1 calc(33.33% - 20px)", marginBottom: "20px" }}>
                <Card title={event.name}  className={styles.card}>
                <div style={{ display: "flex",margin: "0 auto" }}>
                    <div style={{ flex: 1 }}>
                    <p>{getFirstSentence(event.description)}</p>
                    </div>
                </div>
                <Button onClick={() => handleSaveEvent(event.id)} className={styles.button}>SAVE</Button>
                </Card>
            </div>
            ))}
        </Carousel>
        );
    }