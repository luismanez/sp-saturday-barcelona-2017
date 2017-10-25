import { IImageDataProvider } from './IImageDataProvider';
import { IImageItem } from '../models/IImageItem';
import * as lodash from 'lodash';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export class SharepointImageDataProvider implements IImageDataProvider {

    private _webPartContext: IWebPartContext;
    private _listName: string;
    private _requester: SPHttpClient;

    public constructor(context: IWebPartContext) {
        this._webPartContext = context;
        this._listName = 'StockImages';
        this._requester = this._webPartContext.spHttpClient;
    }

    public async getImages(): Promise<IImageItem[]> {
        const absoluteUrl = this._webPartContext.pageContext.web.absoluteUrl;
        let listItemsUrl = `${absoluteUrl}/_api/web/lists/GetByTitle('${this._listName}')/items?$select=Id,Description0,Title,Tags,FileRef`;
        
        // SPHttpClientResponse / json()
        

        //map json returned to IImageItem[]
        const images = responseJson.value.map(item => {
            
            //map tags

            let image: IImageItem = {};
            

            return image;
        });

        return images;
    }
}