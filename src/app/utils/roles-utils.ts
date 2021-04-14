import { Roles } from '../entities/employee/roles/roles-enum';

interface DropdownRoles {
  label: string;
  value: Roles;
}

export class RolesUtils {

  // tslint:disable-next-line:variable-name
  private _roles: DropdownRoles[] = [
    { label: 'CORRETOR', value: Roles.CORRECTOR },
    { label: 'FINANCEIRO', value: Roles.FINANCE },
    { label: 'RELAÇÃO MERCADO', value: Roles.MARKET_RELATIONSHIP },
    { label: 'SECRETARIA', value: Roles.SECRETARY },
    { label: 'APOIO VESTIBULAR', value: Roles.VESTIBULAR_SUPPORT },
  ];

  get roles(): DropdownRoles[] {
    return this._roles;
  }
}
