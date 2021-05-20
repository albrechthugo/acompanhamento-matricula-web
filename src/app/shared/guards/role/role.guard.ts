import { AuthenticatedUser } from './../../../entities/user/authenticated-user';
import { AuthService } from './../../../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, UrlSerializer } from '@angular/router';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/entities/employee/roles/roles-enum';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getUser().pipe(map((res: AuthenticatedUser) => {
      if (res.role === Roles.ADMIN) {
        return true;
      }

      if (state.url === '/relacaoMercado') {
        return res.role === Roles.MARKET_RELATIONSHIP ? true : false;
      } else if (state.url === '/apoioVestibular') {
        return res.role === Roles.VESTIBULAR_SUPPORT ? true : false;
      } else if (state.url === '/secretaria') {
        return res.role === Roles.SECRETARY ? true : false;
      } else if (state.url === '/financeiro') {
        return res.role === Roles.FINANCE ? true : false;
      } else if (state.url === '/correcaoProva') {
        return res.role === Roles.CORRECTOR ? true : false;
      } else {
        return false;
      }
    }));
  }

}
