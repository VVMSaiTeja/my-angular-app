import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class ApiConfigurationsService {
  private url: string = 'https://v3.football.api-sports.io/';
  private season: string = new Date().getFullYear().toString();

  constructor() {}

  public getApiUrl(): string {
    return this.url;
  }

  public getSeason(): string {
    return this.season;
  }

  public getHeaders(): HttpHeaders {
    const headers = new HttpHeaders()
      .set('x-rapidapi-host', environment.FOOTBALL_RAPID_API_HOST)
      .set('x-rapidapi-key', environment.FOOTBALL_RAPID_API_KEY);
    return headers;
  }
}
