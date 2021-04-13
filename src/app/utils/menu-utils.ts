import { MenuItem, PrimeIcons } from 'primeng/api';

export class MenuUtils {

  get menuItems(): MenuItem[] {
    return this._menuItems;
  }

  get adminTabItems(): MenuItem[] {
    return this._adminTabItems;
  }

  get vestibularSupportTabItems(): MenuItem[] {
    return this._vestibularSupportTabItems;
  }

  get secretaryTabItems(): MenuItem[] {
    return this._secretaryTabItems;
  }

  private _menuItems: MenuItem[] = [
    { label: 'RELAÇÃO MERCADO', icon: PrimeIcons.FOLDER, routerLink: '/relacaoMercado' },
    { label: 'FINANCEIRO', icon: PrimeIcons.FOLDER, routerLink: '/financeiro' },
    { label: 'APOIO VESTIBULAR', icon: PrimeIcons.FOLDER, routerLink: '/apoioVestibular' },
    { label: 'SECRETARIA', icon: PrimeIcons.FOLDER, routerLink: '/secretaria' },
    { label: 'CORRETOR', icon: PrimeIcons.FOLDER, routerLink: '/corretor' },
    { label: 'RELATÓRIO', icon: PrimeIcons.FOLDER, routerLink: '/relatorioMatriculas' },
    { label: 'CADASTRO', icon: PrimeIcons.FOLDER, routerLink: '/admin' }
  ];

  private _adminTabItems: MenuItem[] = [
    { label: 'CADASTRO', icon: PrimeIcons.USER_PLUS, routerLink: '/admin/cadastro' },
    { label: 'SOLICITAÇÕES', icon: PrimeIcons.EXCLAMATION_CIRCLE, routerLink: '/admin/solicitacoes' }
  ];

  private _vestibularSupportTabItems: MenuItem[] = [
    { label: 'PROVA', icon: PrimeIcons.PENCIL, routerLink: '/apoioVestibular/enviarProvaVestibular' },
    { label: 'CORREÇÃO', icon: PrimeIcons.CHART_LINE, routerLink: '/apoioVestibular/enviarProvaCorrecao' }
  ];

  private _secretaryTabItems: MenuItem[] = [
    { label: 'SECRETARIA', icon: PrimeIcons.BOOK, routerLink: '/secretaria/' },
    { label: 'DOCUMENTOS', icon: PrimeIcons.CLOUD_UPLOAD, routerLink: '/secretaria/uploadDocumentos' }
  ];
}
