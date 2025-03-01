import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
    selector: 'player-list-search-filter',
    templateUrl: './search-filter.component.html',
    styleUrls: ['./search-filter.component.scss'],
    standalone: false
})
export class PlayerListSearchFilterComponent implements OnInit, OnDestroy {
  @Output() searchChanged = new EventEmitter<string>();

  public searchControl = new UntypedFormControl('');
  private subscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((searchText) => this.searchChanged.emit(searchText));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
