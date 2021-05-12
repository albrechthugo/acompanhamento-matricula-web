import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuUtils } from '../../../utils/menu-utils';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Event, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  private menuUtils = new MenuUtils();
  public menuItems: MenuItem[] = [];
  public canShowSideMenu = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.showSideMenu();
    this.setMenuItems();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setMenuItems(): void {
    this.menuItems = this.menuUtils.menuItems;
  }

  private showSideMenu(): void {
    this.subscription = this.router.events.pipe(
      filter((event: Event): event is NavigationStart => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        if (event.url === '/solicitarCadastro' || event.url === '/relatorioMatriculas/data' || event.url === '/') {
          this.canShowSideMenu = false;
        } else {
          this.canShowSideMenu = true;
        }
      });
  }
}
