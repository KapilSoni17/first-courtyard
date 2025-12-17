import { Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [ RouterModule ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  public isScrolled: boolean = false;
  public isMenuOpen :boolean = false;
  public isHomePage: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  private route = inject(Router);

  public routeToHome():void{
    this.route.navigate(["/"]);
  }

constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '';
        console.log(this.isHomePage)
      });
  }

}
