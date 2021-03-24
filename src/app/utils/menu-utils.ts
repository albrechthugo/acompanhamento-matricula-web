import { MenuItem } from 'primeng/api';

export class MenuUtils {

  // tslint:disable-next-line:variable-name
  private _menuItems: MenuItem[] = [
    { label: 'RELAÇÃO MERCADO', icon: 'pi pi-file-o', routerLink: '/relacaoMercado' },
    { label: 'FINANCEIRO', icon: 'pi pi-file-o', routerLink: '/financeiro' },
    { label: 'APOIO VESTIBULAR', icon: 'pi pi-file-o', routerLink: '/apoioVestibular' },
    { label: 'SECRETARIA', icon: 'pi pi-file-o', routerLink: '/secretaria' },
    { label: 'CORRETOR', icon: 'pi pi-file-o', routerLink: '/corretor' },
    { label: 'RELATÓRIO', icon: 'pi pi-file-o', routerLink: '/relatorioMatriculas' },
    { label: 'CADASTRO', icon: 'pi pi-file-o', routerLink: '/admin' }
  ];

  // tslint:disable-next-line:variable-name
  private _adminTabItems: MenuItem[] = [
    { label: 'CADASTRO', icon: 'pi pi-user-plus', routerLink: '/admin/cadastro' },
    { label: 'SOLICITAÇÕES', icon: 'pi pi-exclamation-circle', routerLink: '/admin/solicitacoes' }
  ];

  // tslint:disable-next-line:variable-name
  private _vestibularSupportTabItems: MenuItem[] = [
    { label: 'PROVA', icon: 'pi pi-pencil', routerLink: '/apoioVestibular/enviarProvaVestibular' },
    { label: 'CORREÇÃO', icon: 'pi pi-chart-line', routerLink: '/apoioVestibular/enviarProvaCorrecao' }
  ];

  get menuItems(): MenuItem[] {
    return this._menuItems;
  }

  get adminTabItems(): MenuItem[] {
    return this._adminTabItems;
  }

  get vestibularSupportTabItems(): MenuItem[] {
    return this._vestibularSupportTabItems;
  }
}
