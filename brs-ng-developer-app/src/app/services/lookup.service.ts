import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TeamModel } from 'src/app/models/team.model';
import { CountryModel } from 'src/app/models/country.model';
import { HandModel } from 'src/app/models/hand.model';
import { LevelModel } from 'src/app/models/level.model';
import { PositionModel } from 'src/app/models/position.model';
import { RoleModel } from 'src/app/models/role.model';
import { LookupsModel } from 'src/app/models/lookups.model';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  constructor(private http: HttpClient) {}

  public getOrganizations(): Observable<TeamModel[]> {
    return this.http.get<LookupsModel>('assets/data/lookups.json').pipe(map((lookups) => lookups.organizations));
  }

  public getCountries(): Observable<CountryModel[]> {
    return this.http.get<LookupsModel>('assets/data/lookups.json').pipe(map((lookups) => lookups.countries));
  }

  public getHands(): Observable<HandModel[]> {
    return this.http.get<LookupsModel>('assets/data/lookups.json').pipe(map((lookups) => lookups.hands));
  }

  public getLevels(): Observable<LevelModel[]> {
    return this.http.get<LookupsModel>('assets/data/lookups.json').pipe(map((lookups) => lookups.levels));
  }

  public getPositions(): Observable<PositionModel[]> {
    return this.http.get<LookupsModel>('assets/data/lookups.json').pipe(map((lookups) => lookups.positions));
  }

  public getRoles(): Observable<RoleModel[]> {
    return this.http.get<LookupsModel>('assets/data/lookups.json').pipe(map((lookups) => lookups.roles));
  }
}
