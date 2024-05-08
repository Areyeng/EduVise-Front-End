import { createAction } from "redux-actions";

export enum ImageActionEnum {
    getImage = 'GETIMAGE',
    getAllImages = 'GETALLIMAGES',
}

export const getImageAction = createAction<string,string>(ImageActionEnum.getImage,p=>p);
export const getAllImagesAction = createAction<string,string>(ImageActionEnum.getAllImages,p=>p);
