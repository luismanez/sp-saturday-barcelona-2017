import { IImageDataProvider } from "../../../dataProviders/IImageDataProvider";
import { IWebPartContext } from "@microsoft/sp-webpart-base";

export interface IHelloWorldProps {
  context: IWebPartContext;
  dataProvider: IImageDataProvider;
  description: string;
  size: number;
}
