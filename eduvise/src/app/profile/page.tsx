'use client'
import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import { Button, Card, Form, Input, message, Modal, Upload } from "antd";
import type { UploadProps } from 'antd';
import { InfoActionsContext } from "@/providers/LearnerProvider/context";
import { useLearnerInfoState } from "@/providers/LearnerProvider";
import withAuth from "@/hocs/withAuth";
import { SavedInstitutionActionsContext } from "@/providers/LearnerInstitution/context";
import { useSavedInstitutionState } from "@/providers/LearnerInstitution";
import { SavedFundingActionsContext } from "@/providers/LearnerFunding/context";
import { useSavedFundingState } from "@/providers/LearnerFunding";
import { SavedEventActionsContext } from "@/providers/LearnerEvent/context";
import { useSavedEventState } from "@/providers/LearnerEvent";
import { SavedCourseActionsContext } from "@/providers/LearnerCourse/context";
import { useSavedCourseState } from "@/providers/LearnerCourse";
import SavedFaculty from "@/components/SavedFaculty";
import Image from "next/image";
import { FacultyActionsContext } from "@/providers/FacultyProvider/context";
import { useAnswerState } from "@/providers/ResponseProvider";
import { useStyles } from "./style";
import { useFacultyState } from "@/providers/FacultyProvider";


const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info:any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
function Profile(): React.ReactNode {
    const { GetLearnerInfo } = useContext(InfoActionsContext);
    const { GetInstitutions } = useContext(SavedInstitutionActionsContext);
    const { GetFundings } = useContext(SavedFundingActionsContext);
    const { GetEvents } = useContext(SavedEventActionsContext);
    const { GetCourses } = useContext(SavedCourseActionsContext);
    const { GetFacultyBySkills }= useContext(FacultyActionsContext);
    const { UpdateLearnerInfo }= useContext(InfoActionsContext);
    const { info } = useLearnerInfoState();
    const { skills } = useAnswerState();
    const { faculties } = useFacultyState();
    const { returnedInstitutions } = useSavedInstitutionState();
    const { returnedFundings } = useSavedFundingState();
    const { returnedEvents } = useSavedEventState();
    const { returnedCourses } = useSavedCourseState();
    const [isInfoInitialized, setIsInfoInitialized] = useState(false);
    const { styles, cx } = useStyles();

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
            GetFacultyBySkills(skills);
        }
    }, [info, isInfoInitialized,faculties]);

    function formatDate(dateString: string): string {
      // Parse the date string into a Date object
      const date = new Date(dateString);
  
      // Format the date
      const options: Intl.DateTimeFormatOptions = {
        
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      };
      return date.toLocaleDateString('en-US', options);
    }
    //Modal
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [form] = Form.useForm();

    const handleEditModalOpen = () => {
        setIsEditModalVisible(true);
        form.setFieldsValue({
            name: info?.name,
            surname: info?.surname,
            birthDate: info?.birthDate,
            emailAddress: info?.emailAddress,
            phoneNumber: info?.phoneNumber,
            id: info?.id,
        });
    };

    const handleEditModalClose = () => {
        setIsEditModalVisible(false);
    };

    const handleEditFormSubmit = () => {
      // console.log("Values",value)
      // UpdateLearnerInfo(values);
      setIsEditModalVisible(false);
    
    };
    const handleSubmit = (values: any) => {
      
      UpdateLearnerInfo(values);
      setIsEditModalVisible(false);
      GetLearnerInfo();
  };

  return (
          <>
          <div className={style.container}>
            <div className={style.top}>
              <div className={style.backgroundImage}>
                <Image src="/college.jpg" width="1520" height="370" alt="eduvise-logo" />
              </div>
              <div className={style.profileContainer}>
                <div className={style.profileImage}>
                  <Image src="/profilePhoto.jpg" width="250" height="250" objectFit="cover" alt="eduvise-logo" />
                </div>
                <div className={style.additionalContent}>
                  {info && <h1 className={style.profileName}>{info.name} {info.surname}</h1>}
                </div>
              </div>
              <div className={style.profileInfo}>
              {info && (
                  <div className={style.form}>
                    <h2 className={style.infoTitle}>Profile Information</h2>
                    <div className={style.infoItem}>
                      <span className={style.infoLabel}>Name:</span> 
                      <span className={style.infoText}>{info.name}</span>
                    </div>
                    <div className={style.infoItem}>
                      <span className={style.infoLabel}>Surname:</span> 
                      <span className={style.infoText}>{info.surname}</span>
                    </div>
                    <div className={style.infoItem}>
                      <span className={style.infoLabel}>Birth date:</span> 
                      <span className={style.infoText}>{formatDate(info.birthDate)}</span>
                    </div>
                    <div className={style.infoItem}>
                      <span className={style.infoLabel}>Email Address:</span> 
                      <span className={style.infoText}>{info.emailAddress}</span>
                    </div>
                    <div className={style.infoItem}>
                      <span className={style.infoLabel}>Phone Number:</span> 
                      <span className={style.infoText}>0{info.phoneNumber}</span>
                    </div>
                    <Button onClick={handleEditModalOpen} className={styles.button}>Edit</Button>
                  </div>
                )}
                
                
     
                </div>
              </div>
              
              <Modal
                  title="Edit Profile"
                  visible={isEditModalVisible}
                  footer={false}
                  // onCancel={handleEditModalClose}
                  // onOk={handleEditFormSubmit}
              >
                <Form 
                  form={form} 
                  layout="vertical"
                  onFinish={handleSubmit}>
                    <Form.Item name="name" label="Name">
                        <Input />
                    </Form.Item>
                    <Form.Item name="surname" label="Surname">
                        <Input />
                    </Form.Item>
                    <Form.Item name="birthDate" label="Birth Date">
                        <Input />
                    </Form.Item>
                    <Form.Item name="emailAddress" label="Email Address">
                        <Input />
                    </Form.Item>
                    <Form.Item name="phoneNumber" label="Phone Number">
                        <Input />
                    </Form.Item>
                     <Form.Item hidden={true} name="id">
                        <Input />
                    </Form.Item>
                    <div>
                    <Form.Item>
                        <Button type="primary" onClick={handleEditModalClose} className={cx(styles.button)}>Cancel</Button>
                   </Form.Item>
                   <Form.Item>
                        <Button type="primary" htmlType="submit" className={cx(styles.button)}>Save</Button>
                   </Form.Item>
                    </div>
                    
                </Form>
            </Modal>
              <div className={style.profileActivity}>
                <SavedFaculty />
              </div>
            </div>
      
          </>
  
  );
}
export default withAuth(Profile);
