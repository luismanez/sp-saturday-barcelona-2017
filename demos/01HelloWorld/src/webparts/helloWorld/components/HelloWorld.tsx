import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { IHelloWorldState } from './IHelloWorldState';
import { escape } from '@microsoft/sp-lodash-subset';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps, IDocumentCardProps, DocumentCardType
} from 'office-ui-fabric-react/lib/DocumentCard';

import DocumentCardDescription from './documentCardDescription/DocumentCardDescription';
import DocumentCardTags from './documentCardTags/DocumentCardTags';
import { IImageItem } from '../../../models/IImageItem';
import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { List } from 'office-ui-fabric-react/lib/List';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {

  private async _getItems(): Promise<void> {
    var images = await this.props.dataProvider.getImages();
    this.setState({ items: images, isInitialized: true });
  }

  constructor(props: IHelloWorldProps) {
    super(props);
    this.state = {
      isInitialized: false,
      items: []
    };
  }

  public componentDidMount() {
    this._getItems();
  }

  public render(): React.ReactElement<IHelloWorldProps> {

    if (!this.state.isInitialized) {
      return (<span>Loading...</span>);
    }

    const images = this.state.items.map(image => {
      let previewProps: IDocumentCardPreviewProps = {
        previewImages: [
          {
            name: image.title,
            //url: 'http://bing.com',
            previewImageSrc: image.url,
            iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABxklEQVRYR+3WO2gVQRTG8V8URSwkiFqkCoigRUBRUBFChJgiVj4K0wWxUBHFwk4b0ULQFClMLCzsAhpFFKOoTYoUUXw1NmKpINhYiCioDKywrHPvzl7uI8Ud2Gq/853/nDmcmR4dXj0dzq8LsCQq8BTDHeqFuVCBN3iCe22GOIyhfwDTCF871ymMFwF6cQmbMYupFhJFAe7iQC7pGGZaBBEF+Iq1uYQ3cLydAA+xP5dwHLcSAQawBbfxJyEmWoH1uJbrgSsJRkGyEa+wBpdxPiEuCpAQ959kJRawPfvzGyN4XmLWNIAJnC0k+4yt+FIHoikAoV8eEL3UHmO0Tj8kAwxiA+4UdtOHt1hXZ5fncLXG/ySAXZjHCpzBZGa2DM+wt+Scf2EPXkR0pQBhKr5Gfxb8E7uzbr+Ai4kd+xHb8K2gLwUIJT9UCPqA09m5L08ECLIwTcNUza+6ACdwvUaCMGQaeUccw82cZ02AMNEWsarCDlOk37ED7zNxFGA1XmYjNcW0quYdduIHogChREerulbUhyv+ZAzgU3bxNHK+VRhCDx3BpvyDJLwL71dxaYL2IAbDbuewrwmGjVg8anW5S6G6AN0K/AXw3HF5yItmlQAAAABJRU5ErkJggg==",
            imageFit: ImageFit.cover,
            width: 318,
            height: 196
          }
        ]
      };

      return (
        <div className={styles.box}>
          <DocumentCard type={DocumentCardType.normal} onClickHref='http://bing.com'>
            <DocumentCardPreview { ...previewProps } />
            <DocumentCardTitle
              title={image.title}
              shouldTruncate={true}
            />
            <DocumentCardDescription description={image.description}></DocumentCardDescription>
            <DocumentCardTags tags={image.tags}></DocumentCardTags>
          </DocumentCard>
        </div>
      );
    });

    return (
      <div className={styles.helloWorld}>
          {images}
      </div>
    );
  }
}
