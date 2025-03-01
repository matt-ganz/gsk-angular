import { Component, EventEmitter, Output } from '@angular/core';

export interface PlayerListFilters {
  searchText: string;
  orgId: string | null;
  positionId: string;
  battingHand: string;
}

export const playerListFiltersDefault: PlayerListFilters = {
  searchText: '',
  orgId: null,
  positionId: '',
  battingHand: '',
};

@Component({
  selector: 'player-list-filters',
  templateUrl: './player-list-filters.component.html',
  styleUrls: ['./player-list-filters.component.scss'],
  standalone: false,
})
export class PlayerListFiltersComponent {
  @Output() filtersUpdated = new EventEmitter<PlayerListFilters>();
  private filters: PlayerListFilters = playerListFiltersDefault;

  constructor() {}

  handleSearchChange(searchText: string) {
    this.filters = {
      ...this.filters,
      searchText,
    };
    this.emit();
  }

  handleOrgChange(orgId: string) {
    this.filters = {
      ...this.filters,
      orgId,
    };
    this.emit();
  }

  handlePositionChange(positionId: string) {
    this.filters = {
      ...this.filters,
      positionId,
    };
    this.emit();
  }
  handleBattingHandChange(battingHand: string) {
    this.filters = {
      ...this.filters,
      battingHand,
    };
    this.emit();
  }

  emit() {
    this.filtersUpdated.emit(this.filters);
  }
}
