import React, { useState } from 'react';
import { Button, DatePicker, Form, Input } from 'antd';
import { useStyles } from "./style";
import { useRegisterActions } from '@/providers/RegisterAuth';
import moment from 'moment';

export default function ProfileForm(): React.ReactNode {
    const { Register } = useRegisterActions();
    const { styles, cx } = useStyles();
    
    // State variable to track edit mode
    const [editMode, setEditMode] = useState(false);

    const handleSubmit = (values: any) => {
        console.log("profile form details::",values )
       // Register(values);
    };

    const validateEmail = (_: any, value: string) => {
        // Email validation function
    };

    const validatePhoneNumber = (_: any, value: string) => {
        // Phone number validation function
    };
    
    const validatePassword = (_: any, value: string) => {
        // Password validation function
    };

    return (
        <Form 
            className={cx(styles.form)} 
            layout="vertical"
            onFinish={handleSubmit}
        >
            <Form.Item label="FIRST NAME" name="name" className={cx(styles.firstNameFormItem)}>
                <Input  className={cx(styles.shortInput)} placeholder='First Name' disabled={!editMode} />
            </Form.Item>
            <Form.Item label="LAST NAME" name="surname" className={cx(styles.lastNameFormItem)}>
                <Input  className={cx(styles.shortInput)} placeholder='Last Name' disabled={!editMode} />
            </Form.Item>
            {/* Add other form fields with disabled={!editMode} as needed */}
            
            <Form.Item>
                {/* Edit button */}
                {!editMode && <Button type="primary" onClick={() => setEditMode(true)}>Edit</Button>}
                {/* Submit button */}
                {editMode && <Button type="primary" htmlType="submit">Submit</Button>}
            </Form.Item>
        </Form>
    );
}
