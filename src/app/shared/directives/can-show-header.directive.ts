import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appCanShowHeader]'
})
export class CanShowHeaderDirective implements OnInit, OnDestroy {

  private subscription = new Subscription();

  constructor(private element: ElementRef, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
        if (event.url === '/') {
          this.element.nativeElement.style.display = 'none';
        } else {
          this.element.nativeElement.style.display = 'flex';
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
