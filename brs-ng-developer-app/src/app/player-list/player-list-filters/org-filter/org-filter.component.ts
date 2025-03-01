import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { distinctUntilChanged, Observable, Subscription } from 'rxjs';
import { TeamModel } from 'src/app/models/team.model';
import { LookupService } from 'src/app/services/lookup.service';

@Component({
    selector: 'player-list-org-filter',
    templateUrl: './org-filter.component.html',
    styleUrls: ['./org-filter.component.scss'],
    standalone: false
})
export class PlayerListOrgFilterComponent implements OnInit, OnDestroy {
  @Output() orgChanged = new EventEmitter<string>();

  public orgControl = new UntypedFormControl('');
  public orgs$: Observable<TeamModel[]>;
  private subscription: Subscription;

  constructor(private lookupSvc: LookupService) {}

  ngOnInit(): void {
    this.orgs$ = this.lookupSvc.getOrganizations();
    this.subscription = this.orgControl.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((orgId) => this.orgChanged.emit(orgId));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
