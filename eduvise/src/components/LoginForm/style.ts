import { createStyles } from 'antd-style';
 
export const useStyles = createStyles(({ css, cx }) => ({
    
  form: css`
    padding: 50px 100px 200px 100px;
    font-weight:semi-bold;
  `,
  input: css`
    border: 2px solid grey;
  `,
  button: css`
    background-color: #385A64;
    width: 405px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    &:hover {
      color: white !important; // Ensure color remains white on hover
      background-color: #385A64 !important; // Set background color on hover to the same as the default
      border-color: white !important; // Set border color to transparent on hover
      transform: scale(1.1); // Scale up by 10% on hover
    }
  `,
  register: css`
    text-align: center;
    margin-top: 20px;
  `,
  
  
}));