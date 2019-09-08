import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { LettersListComponent } from './board/lettersList/lettersList.component';
import { GuessedLettersComponent } from './board/guessedLetters/guessedLetters.component';
import { RemainLettersStateComponent } from './remain-letters-state/remain-letters-state.component';
import { WinLoseStateComponent } from './board/win-lose-state/win-lose-state.component';
import {lettersService} from "./letters.service";
import {imageStateService} from "./imageState.service";
import {winLoseService} from "./winLose.service";
import {letterDownModel} from "./letterDown.model";
import {letterUpModel} from "./letterUp.model";
import {LettersListItemComponent} from "./board/lettersList/lettersListItem/lettersListItem.component"


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    GuessedLettersComponent,
    RemainLettersStateComponent,
    WinLoseStateComponent,
    LettersListItemComponent,
    LettersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [lettersService, imageStateService, winLoseService, letterDownModel,letterUpModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
