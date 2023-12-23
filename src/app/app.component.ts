import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CountrySelectionComponent } from '../components/country-selection/country-selection.component';
import { TeamSelectionComponent } from '../components/team-selection/team-selection.component';
import { ApiConfigurationsService } from '../services/api-configurations.service';
import { SoccerService } from '../services/soccer.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet ,CountrySelectionComponent, TeamSelectionComponent],
  providers: [ApiConfigurationsService, SoccerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
