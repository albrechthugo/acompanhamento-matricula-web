import { AuthService } from './../../../auth/auth.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @ViewChild('headerTitle', { static: false }) headerTitle: ElementRef | any;
  @ViewChild('headerUsername', { static: false }) headerUsername: ElementRef | any;

  private subscription = new Subscription();
  public title = '';
  public name = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.subscribeRouteEvents();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeUserAuthenticated(): void {
    this.authService.getUser().subscribe((user: { name: string, token: string }) => {
      this.name = user.name;
    });
  }

  private subscribeRouteEvents(): void {
    this.subscription = this.router.events
    .pipe(filter((event: Event): event is NavigationStart => event instanceof NavigationStart))
    .subscribe((event: NavigationStart) => {
      this.subscribeUserAuthenticated();
      if (event.url === '/solicitarCadastro' || event.url === '/relatorioMatriculas/data') {
        this.title = event.url === '/solicitarCadastro' ? 'solicitar cadastro' : 'relatório de matrículas';
        this.headerTitle.nativeElement.id = '';
        this.headerUsername.nativeElement.id = 'hidden';
      } else {
        this.headerTitle.nativeElement.id = 'hidden';
        this.headerUsername.nativeElement.id = '';
      }
    });
  }
}
