'use client';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEventState } from "@/providers/EventProvider";
import { Card } from "antd";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
};

export default function EventCarousel() :React.ReactNode{
    const { events } = useEventState();
  
    const getFirstSentence = (text: string): string => {
      const periodIndex = text.indexOf('.');
      return periodIndex !== -1 ? text.substring(0, periodIndex + 1) : text;
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
                <Card title={event.name} bordered={false} style={{ width: "100%", height: '200px' }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                    <p>{getFirstSentence(event.description)}</p>
                    </div>
                </div>
                </Card>
            </div>
            ))}
        </Carousel>
        );
    }