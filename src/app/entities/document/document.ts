import { DocumentEnum } from './document-enum';

export interface Document {
  documentType: DocumentEnum;
  url: string;
}
