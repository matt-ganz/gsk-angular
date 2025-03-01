import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private http: HttpClient) {}

  public getGameLogs(mlbId: number, season: number): Observable<any> {
    const params = new HttpParams({
      fromObject: {
        stats: 'gameLog,statsSingleSeason',
        group: 'hitting,pitching',
        gameType: 'R',
        season: season.toString(),
      },
    });
    return this.http.get<any>(
      `https://statsapi.mlb.com/api/v1/people/${mlbId}/stats`,
      { params }
    );
  }
}
