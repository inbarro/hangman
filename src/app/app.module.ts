import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { LettersListComponent } from './board/lettersList/lettersList.component';
import { GuessedLettersComponent } from './board/guessedLetters/guessedLetters.component';
import { RemainLettersStateComponent } from './remain-letters-state/remain-letters-state.component';
import { WinLoseStateComponent } from './board/win-lose-state/win-lose-state.component';
import { LettersListItemComponent } from "./board/lettersList/lettersListItem/lettersListItem.component";
import { GuessedLettersItemComponent } from "./board/guessedLetters/guessedLettersItem/guessedLettersItem.component";
import { HangmanImageComponent } from './board/hangmanImage/hangmanImage.component';
import { gameStateService } from './gameState.service';
import { lettersService } from "./letters.service";
import { letterDownModel } from "./letterDown.model";
import { letterUpModel } from "./letterUp.model";


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    GuessedLettersComponent,
    RemainLettersStateComponent,
    WinLoseStateComponent,
    LettersListItemComponent,
    LettersListComponent,
    GuessedLettersItemComponent,
    HangmanImageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [lettersService, letterDownModel, letterUpModel, gameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
