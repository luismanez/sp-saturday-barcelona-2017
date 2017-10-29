import { IImageItem } from '../models/IImageItem';

export interface IImageDataProvider {
  getImages(): Promise<IImageItem[]>;
}