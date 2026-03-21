import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ImpressumComponent } from './pages/impressum/impressum';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', redirectTo: '' }
];
