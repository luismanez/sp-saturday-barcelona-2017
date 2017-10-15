import { IImageDataProvider } from './IImageDataProvider';
import { IImageItem } from '../models/IImageItem'
import * as lodash from 'lodash';

export class MockImageDataProvider implements IImageDataProvider {
    getImages(): Promise<IImageItem[]> {

        let mockItems: IImageItem[] = [{
            id: 1,
            url: 'https://static.pexels.com/photos/34950/pexels-photo.jpg',
            title: 'Railway',
            description: '',
            createdby: '',
            tags: ['abandoned', 'forest', 'rails']
        }, {
            id: 2,
            url: 'https://static.pexels.com/photos/145939/pexels-photo-145939.jpeg',
            title: 'Bengal tiger',
            description: '',
            createdby: '',
            tags: ['animals', 'wild-life', 'tiger', 'nature', 'dangerous']
        }, {
            id: 3,
            url: 'https://static.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg',
            title: 'Luxury car',
            description: '',
            createdby: '',
            tags: ['cars', 'luxury', 'money']
        }, {
            id: 4,
            url: 'https://static.pexels.com/photos/359989/pexels-photo-359989.jpeg',
            title: '7 a.m o´clock',
            description: '',
            createdby: '',
            tags: ['time', 'objects']
        }
        ];

        //simulate async behavior
        return new Promise<IImageItem[]>((resolve) => {
            setTimeout(() => resolve(lodash.orderBy(mockItems, ['id'], ['desc'])), 500);
        });
    }
}