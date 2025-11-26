
import { Routes } from '@angular/router';
import { GeocercaGoogleComponent } from './views/geocerca-google/geocerca-google.component';



export const routes: Routes = [
    { path: '',  redirectTo: '/google', pathMatch: 'full' },
    {path: 'google' , component: GeocercaGoogleComponent},
];
