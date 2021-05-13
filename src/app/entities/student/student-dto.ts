import { Document } from './../document/document';
export interface StudentDto {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  documents?: Document[]
}
