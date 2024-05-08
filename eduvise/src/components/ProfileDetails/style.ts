import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, cx }) => ({
  form: css`
    padding: 100px 100px 200px 100px;
    font-weight: semi-bold;
    display: flex; 
    flex-wrap: wrap; 
  `,
  input: css`
    width: 400px;
    border: 2px solid grey;
    flex: 1; 
    margin-right: 10px;
 `,
  button: css`
    background-color: #385A64;
    width: 405px;
    margin-top: 10px; 
  `,
  lastNameFormItem: css`
    flex: 1;
    margin-left: 10px; 
    width:100px;
  `,
  firstNameFormItem: css`
    width: 100px
    flex: 1; 
    margin-right: 10px; 
  `,
  shortInput: css`
    border: 2px solid grey;
  `

}));
