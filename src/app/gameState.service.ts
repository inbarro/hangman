import { Injectable,OnInit } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class gameStateService implements OnInit {

  lives : number;

  minusLife = new Subject<number>();

  constructor() {
    this.lives = 7;
  }


  ngOnInit(){

  }

  checkLetter(){
    oneLessLife
  }

  oneLessLife(){
    console.log("oneLessLife");
    this.lives--;
    this.minusLife.next(this.lives);
  }

}
