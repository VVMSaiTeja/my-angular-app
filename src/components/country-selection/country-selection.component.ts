import { Component, OnDestroy } from '@angular/core';
import { Standing, FixtureData, StandingsResponse } from '../../models/model';
import { SoccerService } from '../../services/soccer.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class CountrySelectionComponent implements OnDestroy {
  public standingsList: Standing[] = [];
  public selectedCountry!: string;
  private selectedLeagueId!: number;
  private leaugeIds: { [key: string]: number } = {
    England: 39,
    Spain: 140,
    Germany: 78,
    France: 61,
    Italy: 135,
  };
  headers: string[] = [
    'Rank',
    'Logo',
    'Name',
    'Games',
    'Win',
    'Loss',
    'Draw',
    'Goal Difference',
    'Points',
  ];
  countries: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private soccerService: SoccerService) {
    if (this.soccerService.selectedCountry) {
      this.getCountryStandings(this.soccerService.selectedCountry);
      this.selectedCountry = this.soccerService.selectedCountry;
    }
  }

  public selectCountry(country: string): void {
    this.selectedCountry = country;
    this.soccerService.selectedCountry = country;
    this.getCountryStandings(country);
  }

  private getCountryStandings(country: string): void {
    this.selectedLeagueId = this.leaugeIds[country];
    this.soccerService
      .getStandings(this.selectedLeagueId, country)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: StandingsResponse) => {
        if (
          data.response &&
          Array.isArray(data.response) &&
          data.response.length > 0
        ) {
          this.standingsList = data.response[0]?.league.standings[0];
        } else if (data.errors) {
          alert(Object.values(data.errors));
        }
      });
  }

  public selectStandingTeam(standing: Standing): void {
    const fixtureData: FixtureData = {
      leagueId: this.selectedLeagueId,
      teamId: standing.team.id,
      teamName: standing.team.name,
    };
    this.soccerService.selectedStandingData = fixtureData;
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
