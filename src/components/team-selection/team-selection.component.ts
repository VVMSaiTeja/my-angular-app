import { Component, OnDestroy } from '@angular/core';
import { FixtureData, Fixture, FixturesResponse } from '../../models/model';
import { SoccerService } from '../../services/soccer.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class TeamSelectionComponent implements OnDestroy {
  private selectedStandingData: FixtureData;
  public fixturesList: Fixture[] = [];
  public headers = ['Logo', 'Home', 'Goals', '---', 'Goals', 'Away', 'Logo'];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private soccerService: SoccerService) {
    this.selectedStandingData = this.soccerService.selectedStandingData;
    this.getFixturesData(this.selectedStandingData);
  }

  private getFixturesData(selectedStandingData: FixtureData): void {
    this.soccerService
      .getFixtureStandings(
        selectedStandingData.leagueId,
        selectedStandingData.teamId
      )
      .subscribe((data: FixturesResponse) => {
        if (data.response) {
          this.fixturesList = data.response;
        } else if (data.errors) {
          alert(Object.values(data.errors));
        }
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
