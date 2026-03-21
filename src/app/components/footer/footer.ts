import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  scrollToTop(): void {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
}
