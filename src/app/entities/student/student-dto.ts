import { Document } from './../document/document';
import { StudentStatusEnum } from './status/student-status-enum';

export interface StudentDto {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  documents?: Document[];
  status?: StudentStatusEnum;
}
