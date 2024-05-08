'use client'
import { useStyles } from "./style";
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import Item from "antd/es/list/Item";
import Link from "next/link";

const { Sider } = Layout;

const data=[
  {'name':'Home','href':'./','icon':'HomeOutlined'},
  {'name':'Assessment', 'href':'/explore','icon':'HomeOutlined'},
  {'name':'MyCareer','href':'/login','icon':'HomeOutlined'},
  {'name':'MyFunding','href':'/login','icon':'HomeOutlined'}
];

export default function SideNav() :React.ReactNode{
  const { styles, cx } = useStyles();
  return (
    <Sider width={200} className={styles.sider} style={{ backgroundColor: '#385A64' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
        className={styles.menu}
        >
          {data.map((item,index) => (
              <Menu.Item key={index}>
                <Link href={item.href} className={styles.links}>{item.name}</Link>
              </Menu.Item>
          ))}
      </Menu>
    </Sider>
  );
};
