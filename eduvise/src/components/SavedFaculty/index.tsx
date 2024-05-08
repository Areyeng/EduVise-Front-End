'use client';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import styles from "./style.module.css";
import { SavedInstitutionActionsContext } from "@/providers/LearnerInstitution/context";
import { useContext, useEffect, useState } from "react";
import { useSavedInstitutionState } from "@/providers/LearnerInstitution";
import { InfoActionsContext } from "@/providers/LearnerProvider/context";
import { useLearnerInfoState } from "@/providers/LearnerProvider";
import { SavedFundingActionsContext } from "@/providers/LearnerFunding/context";
import { useSavedCourseState } from "@/providers/LearnerCourse";
import { SavedCourseActionsContext } from "@/providers/LearnerCourse/context";
import { useSavedEventState } from "@/providers/LearnerEvent";
import { SavedEventActionsContext } from "@/providers/LearnerEvent/context";
import { useSavedFundingState } from "@/providers/LearnerFunding";
import Link from "next/link";
import { Button, Modal } from "antd";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
};

export default function BookCarousel() :React.ReactNode{
    const { GetLearnerInfo } = useContext(InfoActionsContext);
    const { GetInstitutions } = useContext(SavedInstitutionActionsContext);
    const { GetFundings } = useContext(SavedFundingActionsContext);
    const { GetEvents } = useContext(SavedEventActionsContext);
    const { GetCourses } = useContext(SavedCourseActionsContext);
    const { info } = useLearnerInfoState();
    const { returnedInstitutions } = useSavedInstitutionState();
    const { returnedFundings } = useSavedFundingState();
    const { returnedEvents } = useSavedEventState();
    const { returnedCourses } = useSavedCourseState();
    const [isInfoInitialized, setIsInfoInitialized] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
        try {
            await GetLearnerInfo();
            setIsInfoInitialized(true);
        } catch (error) {
            console.error('Error fetching learner info:', error);
        }
    };

    if (!isInfoInitialized) {
        fetchData();
    } else if (info) {
        GetInstitutions(info.id);
        GetFundings(info.id);
        GetEvents(info.id);
        GetCourses(info.id);
        // Additional logic after fetching institutions if needed
    }
}, [info, isInfoInitialized]);
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
// State to manage modal visibility
const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);

// Function to handle removing institution
const handleRemoveInstitution = () => {
    // Your logic to remove the institution goes here
    setIsRemoveModalVisible(false); // Close the modal after removing the institution
};

// Function to handle clicking the "Remove" button
const handleRemoveButtonClick = () => {
    setIsRemoveModalVisible(true); // Show the remove confirmation modal
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
          renderButtonGroupOutside={true} 
        >  
           
          
            <div className={styles.savedInfo}>
              <div className={styles.saveTitle}>
                <h3 className={styles.heading}>SAVED INSTITUTIONS</h3>
                <div className={styles.displaySaved}>
                {returnedInstitutions?.map((institution, index) => (
                  <Link key={index}href={`/institution?id=${institution.id}`}>
                    <div  className={styles.saved}>
                      <p className={styles.name}>{institution.name}</p>
                      
                    </div>
                  </Link>
                   ))}
                </div>
                
              </div>
            </div>
            <div className={styles.savedInfo}>
              <div className={styles.saveTitle}>
                <h3 className={styles.heading}>SAVED COURSES</h3>
                <div className={styles.displaySaved}>
                {returnedCourses?.map((course, index) => (
                  <Link key={index}href={`/faculty?id=${course.facultyId}`}>
                    <div  className={styles.saved}>
                      <p className={styles.name}>{course.name}</p>
                    </div>
                  </Link>
                   ))}
                </div>
                
              </div>
            </div>     
          
            <div className={styles.savedInfo}>
              <div className={styles.saveTitle}>
                <h3 className={styles.heading}>SAVED FUNDING OPTIONS</h3>
                  <div className={styles.displaySaved}>
                  {returnedFundings?.map((funding, index) => (
                    <Link key={index}href={`/fundings`}>
                      <div  className={styles.saved}>
                        <p className={styles.name}>{funding.name}</p>
                      </div>
                    </Link>
                  ))}
                  </div>
              </div>
            </div>
            <div className={styles.savedInfo}>
              <div className={styles.saveTitle}>
                <h3 className={styles.heading}>EVENTS TO ATTEND</h3>
                  <div className={styles.displaySaved}>
                  {returnedEvents?.map((event, index) => (
                    <div key={index} className={styles.saved}>
                      <p className={styles.name}>{event.name}</p>
                      <p className={styles.name}>Venue:{event.venue}</p>
                      <p className={styles.name}>Date and Time: {formatDate(event.date)}</p>
                    </div>
                  ))}
                  </div>
              </div>
            </div> 
               
               
        </Carousel>
        );
    }