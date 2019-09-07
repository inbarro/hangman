import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ImageStateComponent } from './board/image-state/image-state.component';
import { GuessedLettersStateComponent } from './board/guessed-letters-state/guessed-letters-state.component';
import { RemainLettersStateComponent } from './remain-letters-state/remain-letters-state.component';
import { WinLoseStateComponent } from './board/win-lose-state/win-lose-state.component';
import {lettersService} from "./letters.service";
import {imageStateService} from "./imageState.service";
import {winLoseService} from "./winLose.service";
import {letterDownService} from "./letterDown.service";
import {letterUpService} from "./letterUp.service";


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ImageStateComponent,
    GuessedLettersStateComponent,
    RemainLettersStateComponent,
    WinLoseStateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [lettersService, imageStateService, winLoseService, letterDownService, letterUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
