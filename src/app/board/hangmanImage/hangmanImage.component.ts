import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from "rxjs";
import { gameStateService } from '../../gameState.service';
@Component({
  selector: 'app-hangmanImage',
  templateUrl: './hangmanImage.component.html',
  styleUrls: ['./hangmanImage.component.css']
})
export class HangmanImageComponent implements OnInit, OnDestroy{

  lives: number;
  private minusLifeSub:Subscription;
  src: string;


  constructor(private gameStateService:gameStateService) {
    this.lives = this.gameStateService.lives;
    this.src ="./assets/hangmanImages/Hangman "+ (this.lives +1 )+".png";
  }

  ngOnInit() {
    this.lives = this.gameStateService.lives;
    this.src ="./assets/hangmanImages/Hangman "+ (this.lives +1 )+".png";
    this.minusLifeSub =  this.gameStateService.minusLife.subscribe((lives :number ) => {
      this.lives = lives;
      if (this.lives >= 0) {
        this.src = "./assets/hangmanImages/Hangman " + (this.lives+1) + ".png";
      }
    });
    this.gameStateService.resetSubject.subscribe((state :string ) => {
      this.ngOnInit();
    })
  }

  ngOnDestroy(): void {
    this.minusLifeSub.unsubscribe();
  }

}
