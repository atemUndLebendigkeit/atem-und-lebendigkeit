import { Component } from '@angular/core';

@Component({
  selector: 'app-aktuelles',
  templateUrl: './aktuelles.html',
  styleUrl: './aktuelles.scss'
})
export class AktuellesComponent {
  scrollToGruppenworkshops(): void {
    document.getElementById('gruppenworkshops')?.scrollIntoView({ behavior: 'smooth' });
  }
}
