import { useStyles } from "./style";
import Image from "next/image";
import { Menu } from 'antd';
import Link from "next/link";

const { Item } = Menu;

const data=[
    {'name':'Home','href':'./'},
    {'name':'Explore', 'href':'/explore'},
    {'name':'Login','href':'/login'}
];

export default function NavBar() :React.ReactNode{
    const { styles, cx } = useStyles();
    return (
        <Menu mode="horizontal"  className={cx(styles.menu)}>
            <div>
                {/* <Image src="/logo.png" width="100" height="100" alt="eduvise-logo" /> */}
            </div>
            {data.map((item,index) => (
                <Item key={index}>
                    <Link href={item.href} className={styles.link}>{item.name}</Link>
                </Item>
            ))}
        </Menu>
    );
};
