'use client';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import style from "./style.module.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
};

export default function BookCarousel() :React.ReactNode{
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
                <div className={style.item1}>
                    <div className={style.image1}>
                         <Image src="/assessments.jpg" width="340" height="200" alt="eduvise-logo" />
                    </div>
                    <p><b>Career Assessments</b></p>
                    <p>Discover your career path and gain deeper insights. Take personalized assessments to explore your strengths and uncover potential career paths.</p>
                </div>
                <div className={style.item2}>
                    <div className={style.image1}>
                        <Image src="/photo2.jpg" width="340" height="200" alt="eduvise-logo" />
                    </div>
                    <p><b>Explore Institutions</b></p>
                    <p> Discover comprehensive information on educational institutions, including universities, colleges, and vocational training centers, to make informed decisions about your academic journey.</p>
                </div>
                <div className={style.item3}>
                    <div className={style.image1}>
                        <Image src="/faculties.jpg" width="340" height="200" alt="eduvise-logo" />
                    </div>
                    <p><b>Dive into Faculties</b></p>
                    <p>Explore the diverse range of faculties offered by institutions, providing insights into specialized areas of study and career paths to pursue..</p>
                    </div>
                <div className={style.item4}>
                    <div className={style.image1}>
                        <Image src="/courses.jfif" width="340" height="200" alt="eduvise-logo" />
                    </div>
                    <p><b>Courses and Admission</b></p>
                    <p>Access detailed descriptions of courses available within faculties, along with admission requirements and tuition costs, to plan your educational pathway effectively.</p>
                </div>
                <div className={style.item5}>
                    <div className={style.image1}>
                        <Image src="/expo.jfif" width="340" height="200"  alt="eduvise-logo" />
                    </div>
                    <p><b>Career Guidance Events</b></p>
                    <p>Stay informed about upcoming career guidance events organized by institutions, offering valuable insights and opportunities to explore various career options and pathways.</p>
                </div>
                <div className={style.item6}>
                    <div className={style.image1}>
                        <Image src="/funding.png" width="340" height="200" alt="eduvise-logo" />
                    </div>
                    <p><b>Find Funding</b></p>
                    <p>Learn about available funding options for courses, including scholarships, bursaries, and financial aid programs, to support your academic aspirations and alleviate financial burdens.</p>
                </div>
        </Carousel>
        );
    }