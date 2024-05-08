import { createStyles } from 'antd-style';
 
export const useStyles = createStyles(({ css }) => ({
    button: css`
        margin-top:10px;
        color: white !important;
        background-color:#385A64;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        transition: transform 0.2s ease-in-out; // Add transition for smooth scaling
        &:hover {
            color: white !important; // Ensure color remains white on hover
            background-color: #385A64 !important; // Set background color on hover to the same as the default
            border-color: white !important; // Set border color to transparent on hover
            transform: scale(1.1); // Scale up by 10% on hover
        }
    `,

}));