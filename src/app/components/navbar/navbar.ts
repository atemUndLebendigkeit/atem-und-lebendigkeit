import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  private router = inject(Router);

  isScrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled =
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100;
  }

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollTo(id: string): void {
    this.mobileMenuOpen = false;
    if (this.router.url.startsWith('/#/impressum') || this.router.url === '/impressum') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
