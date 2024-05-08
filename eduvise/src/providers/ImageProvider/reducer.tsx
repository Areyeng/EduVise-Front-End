import { IImageContext } from './context';
import { handleActions } from 'redux-actions';
import { ImageActionEnum } from './action';
import { Actions } from './interface';
 
const ImagesReducer = handleActions<IImageContext, any>(
{
      [ImageActionEnum.getImage]: (state, action) => {
        
        return { ...state, images: [...action.payload] };
      },
      [ImageActionEnum.getAllImages]: (state, action) => {
        
        console.log("action", action.payload)
        return { ...state, image: action.payload };
      },
     
},
{} 
);
 
  export default ImagesReducer;