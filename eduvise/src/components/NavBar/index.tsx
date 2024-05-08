import { useContext, useEffect, useState } from 'react';
import { useStyles } from "./style";
import { Menu } from 'antd';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { AuthActionContext } from '@/providers/AuthProvider/context';

const { Item } = Menu;

const data=[
    {'name':'Home','href':'./'},
    {'name':'Explore', 'href':'/explore'},
    {'name':'Login','href':'/login'},
    {'name':'Profile','href':'/profile'}
];

export default function NavBar(): React.ReactNode {
    const { styles, cx } = useStyles();
    const { logout } = useContext(AuthActionContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming initially not logged in
    const router = useRouter();
    useEffect(() => {
       
        const token = localStorage.getItem('token'); 
        setIsLoggedIn(!!token); 

    }, [isLoggedIn]);
    const Logout = () => {
        logout();
        router.push('/');
    };
    return (
    

        <Menu mode="horizontal"  className={cx(styles.menu)}>
        <div>
            {/* <Image src="/logo.png" width="100" height="100" alt="eduvise-logo" /> */}
        </div>
        {data.map((item, index) => (
            <Item key={index}>
                {item.name === 'Login' && isLoggedIn ? (
                    <Link href="#" onClick={Logout}  className={styles.link}>Logout</Link>
                ) : (
                    <Link href={item.href} className={styles.link}>{item.name}</Link>
                )}
            </Item>
        ))}
        </Menu>
    );
};
