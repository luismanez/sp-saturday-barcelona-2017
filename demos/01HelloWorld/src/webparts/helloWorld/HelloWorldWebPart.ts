import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, EnvironmentType, Environment } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField, PropertyPaneSlider
} from '@microsoft/sp-webpart-base';

import * as strings from 'HelloWorldWebPartStrings';
import HelloWorld from './components/HelloWorld';
import { IHelloWorldProps } from './components/IHelloWorldProps';
import { IImageDataProvider } from '../../dataProviders/IImageDataProvider';
import { MockImageDataProvider } from '../../dataProviders/MockImageDataProvider';
import { SharepointImageDataProvider } from '../../dataProviders/SharepointImageDataProvider';

export interface IHelloWorldWebPartProps {
  description: string;
  size: number;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  private _dataProvider: IImageDataProvider;

  protected async onInit(): Promise<void> {
    if (Environment.type === EnvironmentType.Local) {
      this._dataProvider = new MockImageDataProvider();
    } else {
      this._dataProvider = new SharepointImageDataProvider(this.context);
    }

    return super.onInit();
  }    
  
  public render(): void {
    const element: React.ReactElement<IHelloWorldProps> = React.createElement(
      HelloWorld,
      {
        context: this.context,
        dataProvider: this._dataProvider,
        description: this.properties.description,
        size: this.properties.size
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneSlider('size', { min: 0, max: 100 })
              ]
            }
          ]
        }
      ]
    };
  }
}
