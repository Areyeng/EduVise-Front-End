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
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    &:hover {
      color: white !important; // Ensure color remains white on hover
      background-color: #385A64 !important; // Set background color on hover to the same as the default
      border-color: white !important; // Set border color to transparent on hover
      transform: scale(1.1); // Scale up by 10% on hover
    }
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
