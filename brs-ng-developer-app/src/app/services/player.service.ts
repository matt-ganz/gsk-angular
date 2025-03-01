import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Sort } from '@angular/material/sort';
import { filter, Observable } from 'rxjs';
import { PlayerModel } from 'src/app/models/player.model';
import { PlayerListFilters } from 'src/app/player-list/player-list-filters/player-list-filters.component';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  public get(playerId: number): Observable<PlayerModel | null> {
    return this.http.get<PlayerModel>(
      `http://localhost:3001/players/${playerId}`
    );
  }

  // get players given filters, sort, offset, and limit
  public search(
    filters: PlayerListFilters,
    sort: Sort,
    offset: number = 0,
    limit: number = 200
  ): Observable<PlayerModel[]> {
    let params = new HttpParams();

    if (filters.searchText) {
      params = params.append('nameSearch', filters.searchText);
    }

    if (filters.orgId) {
      params = params.append('orgId', +filters.orgId);
    }

    if (filters.positionId) {
      params = params.append('positionId', filters.positionId);
    }

    if (filters.battingHand) {
      params = params.append('battingHand', filters.battingHand);
    }

    if (sort.active) {
      params = params.append('sortField', sort.active);
      params = params.append('sortDir', sort.direction);
    }

    return this.http.get<PlayerModel[]>(`http://localhost:3001/players/`, {
      params,
    });
  }
}
