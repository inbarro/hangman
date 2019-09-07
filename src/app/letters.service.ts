import {Injectable, OnInit} from "@angular/core";
import {letterUpService} from "./letterUp.service";
import {letterDownService} from "./letterDown.service";


@Injectable()
export class lettersService implements OnInit {
  movieArr: string[];
  letterUp: Array<letterUpService>;
  lettersDown: Array<letterDownService>;

  constructor() {

  }

  ngOnInit() {

  }

  initLetterService(movieSentence: string[]) {
    this.movieArr = movieSentence;
    this.letterUp = new Array<letterUpService>();
    this.lettersDown = new Array<letterDownService>();
    let chosenLetters = this.choose25percent();
    this.initUpletters(chosenLetters);
    this.initDownletters(chosenLetters);
  }

  initUpletters(chosenLetters: string[]) {
    for (let letter of this.movieArr) {
      if (letter === " ") {
        this.letterUp.push(new letterUpService("space", letter))
      } else if (!(chosenLetters.includes(letter))) {
        this.letterUp.push(new letterUpService("empty", letter))
      } else {
        this.letterUp.push(new letterUpService("randomed", letter))
      }
    }
    console.log("lettersUp: ");
    console.log(this.letterUp);
  }

  initDownletters(chosenLetters){
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    for (var i = 0; i < alphabet.length; i++){
       if (!(chosenLetters.includes(alphabet[i]))) {
      this.lettersDown.push(new letterUpService("B", alphabet[i]))
    } else {
      this.lettersDown.push(new letterUpService("G", alphabet[i]))
    }
  }
    console.log("lettersDown: ");
    console.log(this.lettersDown);
  }

  choose25percent(){ //TODO
    return ["S", "H"];
  }


  getRundom() {

  }

  getRemain() {

  }

  getGuessed() {

  }

}
