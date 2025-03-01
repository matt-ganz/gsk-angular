import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'player-list-batting-hand-filter',
  templateUrl: './batting-hand-filter.component.html',
  styleUrl: './batting-hand-filter.component.scss',
  standalone: false,
})
export class PlayerListBattingHandFilterComponent {
  @Output() battingHandChanged = new EventEmitter<string>();

  onBattingHandChange(event: MatRadioChange) {
    console.log('Selected Batting Hand:', event.value);
    const battingHand = this.getBattingHand(event.value);
    this.battingHandChanged.emit(battingHand);
  }

  private getBattingHand(handId: string) {
    let battingHand = '';

    switch (handId) {
      case '0':
        battingHand = '';
        break;
      case '1':
        battingHand = 'L';
        break;
      case '2':
        battingHand = 'R';
        break;
      default:
        battingHand = 'R,L';
    }
    return battingHand;
  }
}
