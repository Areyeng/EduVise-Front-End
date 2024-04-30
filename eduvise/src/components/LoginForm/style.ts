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
  `,
  register: css`
    text-align: center;
  `

  
}));