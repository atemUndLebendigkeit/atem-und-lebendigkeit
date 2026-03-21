import { Component } from '@angular/core';

@Component({
  selector: 'app-angebote',
  templateUrl: './angebote.html',
  styleUrl: './angebote.scss'
})
export class AngeboteComponent {
  openPdf(): void {
    window.open(
      'https://drive.google.com/file/d/1SmPHtFhlF8U8VLhKwB0gz1C8tY5LUvsR/view?usp=sharing',
      '_blank'
    );
  }
}
