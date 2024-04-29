import { Layout } from 'antd';
import { useStyles } from "./style";

const { Footer } = Layout;

export default function AppFooter() :React.ReactNode{
    const { styles, cx } = useStyles();
    return (
        <Footer className={cx(styles.footer)}>
            <p >© {new Date().getFullYear()} EduVise. All Rights Reserved.</p> 
        </Footer>
    );
};
