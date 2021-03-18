import { MenuItem } from 'primeng/api';

export class MenuUtils {

  // tslint:disable-next-line:variable-name
  private _items: MenuItem[] = [
    { label: 'RELAÇÃO MERCADO', icon: 'pi pi-file-o', routerLink: '/relacaoMercado' },
    { label: 'FINANCEIRO', icon: 'pi pi-file-o', routerLink: '/financeiro' },
    { label: 'APOIO VESTIBULAR', icon: 'pi pi-file-o', routerLink: '/apoioVestibular' },
    { label: 'SECRETARIA', icon: 'pi pi-file-o', routerLink: '/secretaria' },
    { label: 'CORRETOR', icon: 'pi pi-file-o', routerLink: '/corretor' },
    { label: 'RELATÓRIO', icon: 'pi pi-file-o', routerLink: '/relatorio' },
    { label: 'CADASTRO', icon: 'pi pi-file-o', routerLink: '/admin/cadastro' }
  ];

  get menuItems(): any {
    return this._items;
  }
}
