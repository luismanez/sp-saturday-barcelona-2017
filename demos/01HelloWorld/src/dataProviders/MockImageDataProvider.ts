import { IImageDataProvider } from './IImageDataProvider';
import { IImageItem } from '../models/IImageItem';
import * as lodash from 'lodash';

export class MockImageDataProvider implements IImageDataProvider {

    public async getImages(): Promise<IImageItem[]> {

        let mockItems: IImageItem[] = [{
            id: 1,
            url: 'https://static.pexels.com/photos/34950/pexels-photo.jpg',
            title: 'Railway',
            description: 'Ut facilisis laoreet libero, ut egestas augue tempor nec.',
            createdby: 'John Snow',
            tags: ['abandoned', 'forest', 'rails']
        }, {
            id: 2,
            url: 'https://static.pexels.com/photos/145939/pexels-photo-145939.jpeg',
            title: 'Bengal tiger',
            description: 'Fusce auctor ultricies risus, id tempor sem interdum non. Ut varius, purus nec lobortis accumsan, urna erat viverra enim, vitae dignissim libero tellus in justo.',
            createdby: 'Tyrion Lanister',
            tags: ['animals', 'wildlife', 'tiger', 'nature', 'dangerous']
        }, {
            id: 3,
            url: 'https://static.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg',
            title: 'Luxury car',
            description: 'Aliquam erat volutpat. Morbi risus libero, dignissim vel massa eu, laoreet fermentum sem. Vestibulum sodales posuere diam, at luctus velit scelerisque at.',
            createdby: 'Daneris Targaryen',
            tags: ['cars', 'luxury', 'money']
        }, {
            id: 4,
            url: 'https://static.pexels.com/photos/359989/pexels-photo-359989.jpeg',
            title: '7 a.m o´clock',
            description: 'In euismod turpis at accumsan fringilla. Aenean purus nulla, fringilla sodales mi ac, sollicitudin elementum lorem.',
            createdby: 'Cersei Lanister',
            tags: ['time', 'objects']
        }
        ];

        //simulate async behavior
        return new Promise<IImageItem[]>((resolve) => {
            setTimeout(() => resolve(lodash.orderBy(mockItems, ['id'], ['desc'])), 500);
        });
    }
}