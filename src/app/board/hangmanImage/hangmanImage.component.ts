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
  // minusLife = new EventEmitter<number>();
  src: string;


  constructor(private gameStateService:gameStateService) {
    this.lives = 7;
    this.src ="./assets/hangmanImages/Hangman 7.png";
  }

  ngOnInit() {
    console.log("oninit");
    this.minusLifeSub =  this.gameStateService.minusLife.subscribe((lives :number ) => {
      console.log(lives);
      this.lives = lives;
      this.src ="./assets/hangmanImages/Hangman " +  this.lives + ".png";

      // this.minusLife.emit(lives);
    })
  }

  ngOnDestroy(): void {
    this.minusLifeSub.unsubscribe();
  }

}
