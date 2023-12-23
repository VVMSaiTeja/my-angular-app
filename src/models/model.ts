export interface StandingsResponse {
  response: Response;
  errors: Record<string, string>;
}

export interface Standing {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  all: {
    played: number;
    win: number;
    lose: number;
    draw: number;
  };
  away: {
    played: number;
    win: number;
    lose: number;
    draw: number;
  };
  home: {
    played: number;
    win: number;
    lose: number;
    draw: number;
  };
  goalsDiff: number;
  points: number;
}

export interface FixtureData {
  leagueId: number;
  teamId: number;
  teamName: string;
}

export interface Fixture {
  teams: {
    home: {
      name: string;
      logo: string;
    };
    away: {
      name: string;
      logo: string;
    };
  };
  goals: {
    home: number;
    away: number;
  };
}

export interface FixturesResponse {
  response: Fixture[];
  errors: Record<string, string>;
}
