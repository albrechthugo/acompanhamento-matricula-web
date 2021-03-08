import { Roles } from './roles/roles-enum';

export interface EmployeeDto {
  name: string;
  cpf: string;
  email: string;
  role: Roles;
}
