import { createStyles } from 'antd-style';
 
export const useStyles = createStyles(({ css }) => ({
    menu: css`
        background-color: #385A64;
        font-weight: bold;
        height: 100px;
        padding:30px 150px;
        justify-content: right;
        `,
    link:css`
        color:white !important;
        font-size:20px;
        `
}));