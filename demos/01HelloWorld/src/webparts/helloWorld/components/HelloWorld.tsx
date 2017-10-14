import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
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


export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    
    let previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
          url: 'http://bing.com',
          previewImageSrc: "http://ll-c.ooyala.com/e1/R0ODh2YjE6jw3-0LcmXDzf72p_gN-6Et/promo323980150",
          iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABxklEQVRYR+3WO2gVQRTG8V8URSwkiFqkCoigRUBRUBFChJgiVj4K0wWxUBHFwk4b0ULQFClMLCzsAhpFFKOoTYoUUXw1NmKpINhYiCioDKywrHPvzl7uI8Ud2Gq/853/nDmcmR4dXj0dzq8LsCQq8BTDHeqFuVCBN3iCe22GOIyhfwDTCF871ymMFwF6cQmbMYupFhJFAe7iQC7pGGZaBBEF+Iq1uYQ3cLydAA+xP5dwHLcSAQawBbfxJyEmWoH1uJbrgSsJRkGyEa+wBpdxPiEuCpAQ959kJRawPfvzGyN4XmLWNIAJnC0k+4yt+FIHoikAoV8eEL3UHmO0Tj8kAwxiA+4UdtOHt1hXZ5fncLXG/ySAXZjHCpzBZGa2DM+wt+Scf2EPXkR0pQBhKr5Gfxb8E7uzbr+Ai4kd+xHb8K2gLwUIJT9UCPqA09m5L08ECLIwTcNUza+6ACdwvUaCMGQaeUccw82cZ02AMNEWsarCDlOk37ED7zNxFGA1XmYjNcW0quYdduIHogChREerulbUhyv+ZAzgU3bxNHK+VRhCDx3BpvyDJLwL71dxaYL2IAbDbuewrwmGjVg8anW5S6G6AN0K/AXw3HF5yItmlQAAAABJRU5ErkJggg==",
          imageFit: ImageFit.cover,
          width: 318,
          height: 196
        }
      ]
    };

    return (
      <DocumentCard type={DocumentCardType.normal} onClickHref='http://bing.com'>
        <DocumentCardPreview { ...previewProps } />
        <DocumentCardTitle
          title='File name - testing Office Fabric UI controls.pptx'
          shouldTruncate={ true }
        />
        <DocumentCardDescription description="The default configuration for a card represents a single file, with space to denote the last significant event and the person involved."></DocumentCardDescription>
        <DocumentCardTags tags={['Marketing', 'Sales', 'Approved']}></DocumentCardTags>
      </DocumentCard>
    );
  }
}
