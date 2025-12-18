import { Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  public isScrolled: boolean = false;
  public isMenuOpen: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  private router = inject(Router);

  public routeTo(route: string): void {
    this.router.navigate([route]);
  }
}
