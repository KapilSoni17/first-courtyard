import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public currentYear = new Date().getFullYear();
  private router = inject(Router);

  public routeTo(route: string): void {
    this.router.navigate([route]);
  }

}
