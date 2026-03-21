import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';
import { HeroComponent } from '../../components/sections/hero/hero';
import { AktuellesComponent } from '../../components/sections/aktuelles/aktuelles';
import { AngeboteComponent } from '../../components/sections/angebote/angebote';
import { UebermichComponent } from '../../components/sections/uebermich/uebermich';
import { KontaktComponent } from '../../components/sections/kontakt/kontakt';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AktuellesComponent,
    AngeboteComponent,
    UebermichComponent,
    KontaktComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  ngOnInit(): void {
    this.title.setTitle('Atem und Lebendigkeit | Atemtraining & Körperarbeit in Brunn am Gebirge');

    this.meta.updateTag({ name: 'description', content: 'Atemtraining und Körperarbeit mit Brigitte Röcklinger in Wien und im Bezirk Mödling, Österreich. Atemreisen, Körperweisheit-Coaching und Workshops für Frauen. Finde zurück zu Ruhe, Klarheit und Lebensfreude.' });
    this.meta.updateTag({ name: 'keywords', content: 'Atemtraining, Atemtherapie, Körperarbeit, Atemreise, Körperweisheit, Workshops Frauen, Brunn am Gebirge, Mödling, Wien, Österreich, Stressregulation, Meditation, Brigitte Röcklinger' });
    this.meta.updateTag({ name: 'author', content: 'Brigitte Röcklinger' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'geo.region', content: 'AT-3' });
    this.meta.updateTag({ name: 'geo.placename', content: 'Brunn am Gebirge' });
    this.meta.updateTag({ name: 'geo.position', content: '48.1069;16.2847' });
    this.meta.updateTag({ name: 'ICBM', content: '48.1069, 16.2847' });

    // Remove existing canonical if present, then add fresh one
    const existingCanonical = this.document.querySelector('link[rel="canonical"]');
    if (existingCanonical) existingCanonical.remove();
    const canonical = this.document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://atem-und-lebendigkeit.at/');
    this.document.head.appendChild(canonical);

    // Remove existing JSON-LD if present
    const existingJsonLd = this.document.querySelector('script[type="application/ld+json"]');
    if (existingJsonLd) existingJsonLd.remove();
    const jsonLd = this.document.createElement('script');
    jsonLd.setAttribute('type', 'application/ld+json');
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HealthAndBeautyBusiness',
      'name': 'Atem und Lebendigkeit',
      'description': 'Atemtraining und Körperarbeit mit Brigitte Röcklinger. Atemreisen, Körperweisheit-Coaching und Workshops für Frauen.',
      'url': 'https://atem-und-lebendigkeit.at',
      'logo': 'https://atem-und-lebendigkeit.at/assets/logo_classic.png',
      'image': 'https://atem-und-lebendigkeit.at/assets/brigitte.jpg',
      'telephone': '+43 680 1283654',
      'email': 'atem.lebendigkeit@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Brunn am Gebirge',
        'postalCode': '2345',
        'addressCountry': 'AT'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 48.1069,
        'longitude': 16.2847
      },
      'founder': {
        '@type': 'Person',
        'name': 'Brigitte Röcklinger',
        'jobTitle': 'Atemtrainerin'
      },
      'sameAs': [],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Angebote',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Atemreise',
              'description': 'Einzelbegleitung für bewusstes Atmen und Selbsterfahrung'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Körperweisheit',
              'description': 'Einzelbegleitung für Frauen - körperorientiertes Sexualcoaching'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Workshops für Frauen',
              'description': 'Gruppenworkshops zur Verbundenheit mit dem eigenen Körper'
            }
          }
        ]
      }
    });
    this.document.head.appendChild(jsonLd);
  }
}
