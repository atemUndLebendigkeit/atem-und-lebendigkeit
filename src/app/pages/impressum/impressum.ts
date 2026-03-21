import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar';

@Component({
  selector: 'app-impressum',
  imports: [NavbarComponent],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss'
})
export class ImpressumComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);
  private router = inject(Router);

  ngOnInit(): void {
    this.title.setTitle('Impressum | Atem und Lebendigkeit');
    this.meta.updateTag({ name: 'description', content: 'Impressum von Atem und Lebendigkeit - Brigitte Röcklinger, Atemtrainerin und Energetikerin in Brunn am Gebirge, Österreich.' });
    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });

    const existingCanonical = this.document.querySelector('link[rel="canonical"]');
    if (existingCanonical) existingCanonical.remove();
    const canonical = this.document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://atem-und-lebendigkeit.at/#/impressum');
    this.document.head.appendChild(canonical);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
