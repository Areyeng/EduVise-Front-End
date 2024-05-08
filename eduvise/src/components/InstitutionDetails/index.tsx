import { Modal, Button } from 'antd';
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { useSavedInstitutionState } from "@/providers/LearnerInstitution";
import { SavedInstitutionActionsContext } from "@/providers/LearnerInstitution/context";
import { useSavedCourseState } from "@/providers/LearnerCourse";
import { SavedCourseActionsContext } from "@/providers/LearnerCourse/context";
import { useSavedFundingState } from "@/providers/LearnerFunding";
import { SavedFundingActionsContext } from "@/providers/LearnerFunding/context";
import { useSavedEventState } from "@/providers/LearnerEvent";
import { SavedEventActionsContext } from "@/providers/LearnerEvent/context";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./style.module.css";
import { useLearnerInfoState } from '@/providers/LearnerProvider';
import { InfoActionsContext } from '@/providers/LearnerProvider/context';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
};

export default function BookCarousel(): React.ReactNode {
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




    const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);
    const [itemToRemove, setItemToRemove] = useState<any | null>(null);


    // Function to remove an item
    const removeItem = () => {
        // Your logic to remove the item goes here
        setIsRemoveModalVisible(false); // Close the modal after removing the item
    };

    // JSX for the remove confirmation modal
    const removeConfirmationModal = (
        <Modal
            title="Confirm Removal"
            visible={isRemoveModalVisible}
            onCancel={() => setIsRemoveModalVisible(false)}
            footer={[
                <Button key="cancel" onClick={() => setIsRemoveModalVisible(false)}>Cancel</Button>,
                <Button key="remove" type="primary" danger onClick={removeItem}>Remove</Button>
            ]}
        >
            <p>Are you sure you want to remove this item?</p>
        </Modal>
    );

    // JSX for displaying saved institutions
    const savedInstitutions = (
        <div className={styles.savedInfo}>
            <div className={styles.saveTitle}>
                <h3 className={styles.heading}>SAVED INSTITUTIONS</h3>
                <div className={styles.displaySaved}>
                    {returnedInstitutions?.map((institution: any, index: number) => (
                        <div key={index} className={styles.saved}>
                            <p className={styles.name}>
                                <Link href={`/institution?id=${institution.id}`}>
                                    {institution.name}
                                </Link>
                            </p>
                            {/* "Remove" button for each institution */}
                            <Button className={styles.removeButton} onClick={() => { setItemToRemove(institution); setIsRemoveModalVisible(true); }}>Remove</Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

   

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
                renderButtonGroupOutside={true}
            >
                {savedInstitutions}
                {/* {savedCourses}
                {savedFundings}
                {savedEvents} */}
            </Carousel>
            {removeConfirmationModal}
        </>
    );
}
