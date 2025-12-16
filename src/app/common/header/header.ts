import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ RouterModule ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  public isScrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  private route = inject(Router);

  public routeToHome():void{
    this.route.navigate(["/"]);
  }
}
