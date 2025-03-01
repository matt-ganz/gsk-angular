import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { distinctUntilChanged, Observable, Subscription } from 'rxjs';
import { PositionModel } from 'src/app/models/position.model';
import { TeamModel } from 'src/app/models/team.model';
import { LookupService } from 'src/app/services/lookup.service';

@Component({
  selector: 'player-list-position-filter',
  templateUrl: './position-filter.component.html',
  styleUrls: ['./position-filter.component.scss'],
  standalone: false,
})
export class PlayerListPositionFilterComponent implements OnInit, OnDestroy {
  @Output() positionChanged = new EventEmitter<string>();

  public orgControl = new UntypedFormControl('');
  public positions$: Observable<PositionModel[]>;
  private subscription: Subscription;

  constructor(private lookupSvc: LookupService) {}

  ngOnInit(): void {
    this.positions$ = this.lookupSvc.getPositions();
    this.subscription = this.orgControl.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((orgId) => this.positionChanged.emit(orgId));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
