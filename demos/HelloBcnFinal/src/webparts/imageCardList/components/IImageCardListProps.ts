import { IImageDataProvider } from "../../../dataProviders/IImageDataProvider";
import { IWebPartContext } from "@microsoft/sp-webpart-base";

export interface IImageCardListProps {
  context: IWebPartContext;
  dataProvider: IImageDataProvider;
  description: string;
  size: number;
}
