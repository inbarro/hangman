import {Injectable, OnInit} from "@angular/core";
import {letterDownModel} from "./letterDown.model";
import {letterUpModel} from "./letterUp.model";


@Injectable()
export class lettersService implements OnInit {
  movieArr: string[];
  lettersUp: Array<letterUpModel>;
  lettersDown: Array<letterDownModel>;

  constructor() {

  }

  ngOnInit() {
  }

  initLetterService(movieSentence: string[]) {
    this.movieArr = movieSentence;
    this.lettersUp = new Array<letterUpModel>();
    this.lettersDown = new Array<letterDownModel>();
    let chosenLetters = this.choose25percent();
    this.initUpletters(chosenLetters);
    this.initDownletters(chosenLetters);
  }

  initUpletters(chosenLetters: string[]) {
    for (let letter of this.movieArr) {
      if (letter === " ") {
        this.lettersUp.push(new letterUpModel("space", letter))
      } else if (!(chosenLetters.includes(letter))) {
        this.lettersUp.push(new letterUpModel("empty", letter))
      } else {
        this.lettersUp.push(new letterUpModel("randomed", letter))
      }
    }
  }

  initDownletters(chosenLetters){
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    for (var i = 0; i < alphabet.length; i++){
      if (!(chosenLetters.includes(alphabet[i]))) {
        this.lettersDown.push(new letterDownModel("B", alphabet[i]))
      } else {
        this.lettersDown.push(new letterDownModel("G", alphabet[i]))
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
