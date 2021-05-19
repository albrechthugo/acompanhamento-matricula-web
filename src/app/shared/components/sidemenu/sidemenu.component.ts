import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuUtils } from '../../../utils/menu-utils';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Event, NavigationStart, Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { AuthenticatedUser } from '../../../entities/user/authenticated-user';
import { Roles } from '../../../entities/employee/roles/roles-enum';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  public menuItems: MenuItem[] = [];
  public canShowSideMenu = false;
  public canBlockUi = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.showSideMenu();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setMenuItemsByRole(): void {
    this.canBlockUi = true;
    const menuUtils = new MenuUtils();
    this.authService.getUser().subscribe((user: AuthenticatedUser) => {
      if (user.role === Roles.ADMIN) {
        this.menuItems = menuUtils.menuItems;
      } else if (user.role === Roles.FINANCE) {
        this.menuItems = [menuUtils.menuItems[0], menuUtils.menuItems[2]];
      } else if (user.role === Roles.CORRECTOR) {
        this.menuItems = [menuUtils.menuItems[0], menuUtils.menuItems[5]];
      } else if (user.role === Roles.MARKET_RELATIONSHIP) {
        this.menuItems = [menuUtils.menuItems[0], menuUtils.menuItems[1]];
      } else if (user.role === Roles.SECRETARY) {
        this.menuItems = [menuUtils.menuItems[0], menuUtils.menuItems[4]];
      } else if (user.role === Roles.VESTIBULAR_SUPPORT) {
        this.menuItems = [menuUtils.menuItems[0], menuUtils.menuItems[3]];
      } else {
        this.menuItems = [];
      }
      this.canBlockUi = false;
    });
  }

  private showSideMenu(): void {
    this.subscription = this.router.events.pipe(
      filter((event: Event): event is NavigationStart => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.setMenuItemsByRole();
        if (event.url === '/solicitarCadastro' || event.url === '/relatorioMatriculas/data' || event.url === '/') {
          this.canShowSideMenu = false;
        } else {
          this.canShowSideMenu = true;
        }
      });
  }
}
