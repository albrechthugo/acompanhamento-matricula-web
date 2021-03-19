import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.router.events.pipe(
      filter((event: Event): event is NavigationStart => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        if (event.url === '/solicitarCadastro' || event.url === '/relatorioMatricula') {
          this.headerTitle.nativeElement.id = '';
          this.headerUsername.nativeElement.id = 'hidden';
        } else {
          this.headerTitle.nativeElement.id = 'hidden';
          this.headerUsername.nativeElement.id = '';
        }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
