import { IImageDataProvider } from './IImageDataProvider';
import { IImageItem } from '../models/IImageItem';
import * as lodash from 'lodash';
import { IWebPartContext } from '@microsoft/sp-webpart-base';

export class SharepointImageDataProvider implements IImageDataProvider {

    private _webPartContext: IWebPartContext;

    public constructor(context: IWebPartContext) {
        this._webPartContext = context;
    }

    public async getImages(): Promise<IImageItem[]> {
        throw new Error("Method not implemented.");
    }
}