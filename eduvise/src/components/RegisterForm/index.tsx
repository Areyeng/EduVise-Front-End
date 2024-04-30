import React from 'react';
import { Button, DatePicker, Form, Input } from 'antd';
import { useStyles } from "./style";
import { useRegisterActions } from '@/providers/RegisterAuth';
import moment from 'moment';

export default function RegisterForm(): React.ReactNode {
    const { Register } = useRegisterActions();
    const { styles, cx } = useStyles();

    const handleSubmit = (values: any) => {
        Register(values);
    };

    const validateEmail = (_: any, value: string) => {
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || value.match(emailRegex)) {
            return Promise.resolve();
        }
        return Promise.reject('Please enter a valid email address');
    };

    const validatePhoneNumber = (_: any, value: string) => {
        // Regular expression for 10-digit phone number validation
        const phoneRegex = /^\d{10}$/;
        if (!value || value.match(phoneRegex)) {
            return Promise.resolve();
        }
        return Promise.reject('Please enter a 10-digit phone number');
    };
    
    const validatePassword = (_: any, value: string) => {
        // Regular expression for password: at least one uppercase letter, one lowercase letter, one digit, one special character,
        // and between 8 to 20 characters in length
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,20}$/;
        if (!value || value.match(passwordRegex)) {
            return Promise.resolve();
        }
        return Promise.reject('Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be 8 to 20 characters in length');
    };

    return (
        <Form 
            className={cx(styles.form)} 
            layout="vertical"
            onFinish={handleSubmit}
        >
            <Form.Item label="FIRST NAME" name="name" className={cx(styles.firstNameFormItem)}>
                <Input  className={cx(styles.shortInput)} placeholder='First Name' />
            </Form.Item>
            <Form.Item label="LAST NAME" name="surname" className={cx(styles.lastNameFormItem)}>
                <Input  className={cx(styles.shortInput)} placeholder='Last Name'/>
            </Form.Item>
            {/* <Form.Item label="DATE OF BIRTH" name="birthDate">
                <DatePicker
                    className={cx(styles.input)}
                    placeholder='Select Birth Date'
                    format="YYYY-MM-DD"
                    onChange={(date, dateString) => {
                        const dateOnly = moment(dateString, 'YYYY-MM-DD').format('YYYY-MM-DD');
                        console.log('DateOnly:', dateOnly);
                    }}
                />
            </Form.Item> */}
            <Form.Item 
                label="EMAIL ADDRESS"  
                name="emailAddress"
                rules={[{ required: true, message: 'Please enter your email address' }]}
            >
                <Input className={cx(styles.input)} placeholder='Email Address'/>
            </Form.Item>
            <Form.Item 
                label="PHONE NUMBER"
                name="phoneNumber"
                rules={[{ required: true, message: 'Please enter your phone number' },]}
            >
                <Input className={cx(styles.input)}  placeholder='Phone Number'/>
            </Form.Item>
            <Form.Item 
                label="PASSWORD" 
                name="password"
                rules={[{ required: true, message: 'Please enter your password' }, { validator: validatePassword }]}
            >
                <Input.Password  className={cx(styles.input)}  placeholder='Password'/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className={cx(styles.button)}>SIGN UP</Button>
            </Form.Item>
        </Form>
    );
}
