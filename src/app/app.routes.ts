import { Routes } from '@angular/router';
import { CountrySelectionComponent } from '../components/country-selection/country-selection.component';
import { TeamSelectionComponent } from '../components/team-selection/team-selection.component';

export const routes: Routes = [
    { path: '', component:  CountrySelectionComponent},
    { path: 'teamMatches', component:  TeamSelectionComponent},
];
