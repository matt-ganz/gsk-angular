import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { combineLatest, Observable, startWith, switchMap } from 'rxjs';
import { PlayerModel } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';
import {
  PlayerListFiltersComponent,
  playerListFiltersDefault,
} from './player-list-filters/player-list-filters.component';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  standalone: false,
})
export class PlayerListComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(PlayerListFiltersComponent) filters: PlayerListFiltersComponent;

  public players$: Observable<PlayerModel[]>;

  constructor(private playerSvc: PlayerService) {}

  ngAfterViewInit(): void {
    const sortDefault: Sort = { active: 'LASTNAME', direction: 'asc' };
    const filters$ = this.filters.filtersUpdated.pipe(
      startWith(playerListFiltersDefault)
    );
    const sort$ = this.sort.sortChange.pipe(startWith(sortDefault));

    this.players$ = combineLatest([filters$, sort$]).pipe(
      switchMap(([filters, sort]) => this.playerSvc.search(filters, sort))
    );
  }

  openDialog($event: any) {
    console.log('hi matt');
  }
}
