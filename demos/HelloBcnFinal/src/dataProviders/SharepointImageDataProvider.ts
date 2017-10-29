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
        let listItemsUrl = `${this._webPartContext.pageContext.web.absoluteUrl}/_api/web/lists/GetByTitle('${this._listName}')/items?$select=Id,Description0,Title,Tags,FileRef`;
        
        const response: SPHttpClientResponse = await this._requester.get(listItemsUrl, SPHttpClient.configurations.v1);
        const responseJson: any = await response.json();
        console.log(responseJson);

        const images = responseJson.value.map(item => {
            const tags = item.Tags.map(tag => {
                return tag.Label;
            });
            let image: IImageItem = {};
            image.id = item.Id;
            image.title = item.Title;
            image.description = item.Description0;
            image.tags = tags;
            image.url = `${item.FileRef}`;

            return image;
        });

        return images;
    }
}