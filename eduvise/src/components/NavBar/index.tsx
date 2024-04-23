import {useStyles} from "./style";
import Image from "next/image";
import { Menu } from 'antd';
import Link from "next/link";

const { Item } = Menu;

export default function NavBar() :React.ReactNode{
    const { styles, cx } = useStyles();
    return (
        <Menu mode="horizontal"  className={cx(styles.menu)}>
            <div>
                {/* <Image src="/logo.png" width="100" height="100" alt="eduvise-logo" /> */}
            </div>
            <Item key="home">
                <Link href="/">Home</Link>
            </Item>
            <Item key="explore">
                <Link href="/explore">Explore</Link>
            </Item>
            <Item key="Log In">
                <Link href="/login">Login</Link>
            </Item>
        </Menu>
    );
};


