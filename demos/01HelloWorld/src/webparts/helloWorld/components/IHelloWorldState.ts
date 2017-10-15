import { IImageItem } from "../../../models/IImageItem";

export interface IHelloWorldState {
    isInitialized?: boolean;    
    items?: IImageItem[];
}