import { Roles } from '../employee/roles/roles-enum';

export interface AuthenticatedUser {
  name: string;
  token: string;
  role: Roles;
}
