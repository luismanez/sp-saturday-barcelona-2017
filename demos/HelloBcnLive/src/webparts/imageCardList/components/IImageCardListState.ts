import { IImageItem } from "../../../models/IImageItem";

export interface IImageCardListState {
    isInitialized?: boolean;    
    items?: IImageItem[];
}