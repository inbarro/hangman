import { Injectable,OnInit } from "@angular/core";
import { Subject } from 'rxjs';
import {letterDownModel} from "./letterDown.model";
import {letterUpModel} from "./letterUp.model";
import {lettersService} from "./letters.service";

@Injectable()
export class gameStateService implements OnInit {

  lives : number;
  winOrLose: string;
  minusLife = new Subject<number>();
  winLoseSubject = new Subject<string>();
  resetSubject = new Subject<string>();


  constructor(private lettersService:lettersService) {
    this.lives = 6;
    this.winOrLose = "stillPlaying";
  }

  ngOnInit(){

  }

  checkLetter(letter: letterDownModel) {
    if  ( (!(letter.type==="G")) && (this.winOrLose==='stillPlaying') ) {
      letter.setToUnable();
      let letterChar = letter.getLetter();
      if (this.lettersService.movieArr.includes(letterChar)) {
        // update movie guessed letters
        for (let letter of this.lettersService.lettersUp){
          if ( letter.getLetter()===letterChar){
            letter.setType("chosen");
          }
        }
        // check if win
        let isWin = this.checkIfWin();
        if (isWin) {
          this.winOrLose = "win";
          this.winLoseSubject.next("win");
        }
      }
      else{
        this.oneLessLife();
      }
    }
  }

  oneLessLife(){
    this.lives--;
    this.minusLife.next(this.lives);
    if (this.lives ===0){
      this.winOrLose = "lose";
      this.winLoseSubject.next("lose");

    }
  }

  checkIfWin(){
    for (let letter of this.lettersService.lettersUp) {
      if (letter.getType() == 'empty')
        return false;
    }
    return true;
  }

  playAgain(){
    this.lives = 6;
    this.winOrLose = "stillPlaying";
    this.resetSubject.next();
  }
}
