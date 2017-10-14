import * as React from 'react';
import styles from './DocumentCardDescription.module.scss';
import { IDocumentCardDescriptionProps } from './IDocumentCardDescriptionProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class DocumentCardDescription extends React.Component<IDocumentCardDescriptionProps, {}> {
  public render(): React.ReactElement<IDocumentCardDescriptionProps> {  

    return (
      <div className={styles.documentCardDescription}>
        <span className={styles.label}>{this.props.description}</span>
      </div>
    );
  }
}