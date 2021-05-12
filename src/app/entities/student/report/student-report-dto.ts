import { StudentStatusEnum } from '../status/student-status-enum';

export interface StudentReportDto {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  creationDate: string;
  studentStatus: StudentStatusEnum;
}
