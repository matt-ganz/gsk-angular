import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PitchesService {
  constructor(private http: HttpClient) {}

  public getByPitcher(pitcherId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:3001/players/${pitcherId}/pitches`
    );
  }

  public getByGame(gamePk: number): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:3001/games/${gamePk}/pitches`
    );
  }
}
