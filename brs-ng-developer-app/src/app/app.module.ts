import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { PlayerListFiltersComponent } from './player-list/player-list-filters/player-list-filters.component';
import { PlayerListSearchFilterComponent } from './player-list/player-list-filters/search-filter/search-filter.component';
import { PlayerListOrgFilterComponent } from './player-list/player-list-filters/org-filter/org-filter.component';
import { PlayerListPositionFilterComponent } from './player-list/player-list-filters/position-filter/position-filter.component';
import { PlayerListBattingHandFilterComponent } from './player-list/player-list-filters/batting-hand-filter/batting-hand-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerListFiltersComponent,
    PlayerListSearchFilterComponent,
    PlayerListOrgFilterComponent,
    PlayerListPositionFilterComponent,
    PlayerListBattingHandFilterComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
