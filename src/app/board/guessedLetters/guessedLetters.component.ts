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
  allWordsArray: Array<letterUpModel[]>;


  constructor(private lettersService: lettersService) {
  }

  ngOnInit() {
    this.lettersUp = this.lettersService.lettersUp;
    // this.initAllWordsArray();
  }

  // initAllWordsArray() {
  //   let currArr = letterUpModel[];
  // }
}

