import { Injectable,OnInit } from "@angular/core";
import { Subject } from 'rxjs';
import {letterDownModel} from "./letterDown.model";
import {letterUpModel} from "./letterUp.model";
import {lettersService} from "./letters.service";

@Injectable()
export class gameStateService implements OnInit {

  lives : number;

  minusLife = new Subject<number>();

  constructor(private lettersService:lettersService) {
    this.lives = 7;
  }


  ngOnInit(){

  }

  checkLetter(letter: letterDownModel) {
    if (!(letter.type==="G")) {
      letter.setToUnable();
      let letterChar = letter.getLetter();
      if (this.lettersService.movieArr.includes(letterChar)) {
        for (let letter of this.lettersService.lettersUp){
          if ( letter.getLetter()===letterChar){
            letter.setType("chosen");
          }
        }
      }
      else{
        this.oneLessLife();
      }
    }
  }

  // checkLetter(letter: letterDownModel) {
  //   if (!(letter.type==="G")) {
  //     letter.setToUnable();
  //     let letterChar = letter.getLetter();
  //     if (this.lettersService.movieArr.includes(letterChar)) {
  //       let arr = this.lettersService.lettersUp;
  //       for (var i = 0; i< arr.length;i++){
  //         if ( arr[i].getLetter()===letterChar){
  //           arr[i].setType("chosen");
  //         }
  //       }
  //     }
  //     else{
  //       this.oneLessLife();
  //     }
  //   }
  // }

  oneLessLife(){
    this.lives--;
    this.minusLife.next(this.lives);
  }

}
