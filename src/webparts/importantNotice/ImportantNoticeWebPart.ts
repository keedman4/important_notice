import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ImportantNoticeWebPartStrings';
import ImportantNotice from './components/ImportantNotice';
import { IImportantNoticeProps } from './components/IImportantNoticeProps';

export interface IImportantNoticeWebPartProps {
  description: string;
}

export default class ImportantNoticeWebPart extends BaseClientSideWebPart<IImportantNoticeWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IImportantNoticeProps> = React.createElement(
      ImportantNotice,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
