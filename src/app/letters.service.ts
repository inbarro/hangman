import {Injectable, OnInit} from "@angular/core";
import {letterDownModel} from "./letterDown.model";
import {letterUpModel} from "./letterUp.model";
import {distinct} from "rxjs/operators";


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
    this.lettersUp = Array<letterUpModel>();
    this.lettersDown = new Array<letterDownModel>();
    let chosenLetters = this.choose25percent();
    this.initUpletters(chosenLetters);
    this.initDownletters(chosenLetters);
  }

  initUpletters(chosenLetters: string[]) {
    // let allwordsarray = this.movieArr.
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
  }

  choose25percent(){
    let persentLettersArr = [];

    let lettersSet = new Set(this.movieArr);
    let array = Array.from(lettersSet);
    //
    // for (let entry of lettersSet) {
    //   console.log(entry);
    // }
    let counter = 0;
    while (counter <(lettersSet.size)*0.25){
      let randomLetter = array[Math.floor(Math.random() * array.length)];
      if (!(persentLettersArr.includes(randomLetter))){
        persentLettersArr[counter] = randomLetter;
        counter++;
      }
    }
    return persentLettersArr;
  }

  getRundom() {

  }

  getRemain() {

  }

  getGuessed() {

  }

}
