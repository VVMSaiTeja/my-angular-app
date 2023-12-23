import { Injectable } from '@angular/core';
import {
  FixtureData,
  FixturesResponse,
  StandingsResponse,
} from '../models/model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { ApiConfigurationsService } from './api-configurations.service';

@Injectable()
export class SoccerService {
  public selectedCountry!: string;
  public selectedStandingData!: FixtureData;
  private cacheData: { [key: string]: StandingsResponse } = {};

  constructor(
    private http: HttpClient,
    private apiConfigService: ApiConfigurationsService
  ) {}

  public getStandings(
    id: number,
    country: string
  ): Observable<StandingsResponse> {
    if (this.cacheData[country]) {
      console.log(
        `Returning cached data for ${country}:`,
        this.cacheData[country]
      );
      return of(this.cacheData[country]);
    }
    return this.http
      .get<StandingsResponse>(
        `${this.apiConfigService.getApiUrl()}standings?league=${id}&season=${this.apiConfigService.getSeason()}`,
        { headers: this.apiConfigService.getHeaders() }
      )
      .pipe(
        map((data) => {
          this.cacheData[country] = data;
          return data;
        })
      );
  }

  public getFixtureStandings(
    leagueId: number,
    teamId: number
  ): Observable<FixturesResponse> {
    return this.http.get<FixturesResponse>(
      `${this.apiConfigService.getApiUrl()}fixtures?league=${leagueId}&season=${this.apiConfigService.getSeason()}&team=${teamId}&last=10`,
      { headers: this.apiConfigService.getHeaders() }
    );
  }
}
