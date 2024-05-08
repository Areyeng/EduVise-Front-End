import React, { useState } from 'react';
import Link from "next/link";
import { Button, Form, Input, Radio, message } from 'antd';
import {useStyles} from "./style";
import { useAuthActions, useAuthState } from '@/providers/AuthProvider';
import { Details } from '@/providers/AuthProvider/interface';

export default function LoginForm(): React.ReactNode{
    const {login} = useAuthActions();
    const { isAuthenticated } = useAuthState();
    const { styles, cx } = useStyles();
    let authToken: string | null;
  
    const handleSubmit = (details: any) => {
        try{
            login(details);
            authToken=localStorage.getItem("token");
            console.log("is authenticated:::",isAuthenticated)
        }catch{
            message.error("Unsuccessful login")
        }
    };
    return (
        <Form 
            className={cx(styles.form)} 
            layout={'vertical'}
            onFinish={handleSubmit}
        >
            <Form.Item label="EMAIL ADDRESS" name="userNameOrEmailAddress">
                <Input className={cx(styles.input)} placeholder='Email Address'/>
            </Form.Item>
            <Form.Item label="PASSWORD" name="password">
                <Input.Password className={cx(styles.input)} placeholder='Password'/>
            </Form.Item>
            <Form.Item>
                <Button className={cx(styles.button)} htmlType="submit" type="primary">LOGIN</Button>
                <div className={cx(styles.register)}><p>Not registered yet?<Link href="/register"> Create an account</Link></p></div>
            </Form.Item>
        </Form>
    );
};
