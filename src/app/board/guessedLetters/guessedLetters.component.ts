import { Component, OnInit } from '@angular/core';
import { lettersService } from '../../letters.service'
import {letterUpModel} from "../../letterUp.model";


@Component({
  selector: 'app-guessedLetters',
  templateUrl: './guessedLetters.component.html',
  styleUrls: ['./guessedLetters.component.css']
})
export class GuessedLettersComponent implements OnInit {

  lettersUp: letterUpModel[];
  allWordsArray: Array<Array<letterUpModel>>;
  currArray: Array<letterUpModel>

  constructor(private lettersService: lettersService) {
  }

  ngOnInit() {
    this.allWordsArray = new Array<Array<letterUpModel>>();
    this.lettersUp = this.lettersService.lettersUp;
    this.initAllWordsArray();
  }

  initAllWordsArray() {
    this.currArray = new Array<letterUpModel>();
    for (let letter of this.lettersUp) {
      if (letter.getType() != 'space') {
        this.currArray.push(letter);
      } else {
        this.allWordsArray.push(this.currArray);
        let currArray = new Array<letterUpModel>();
      }
    }
    }
}

