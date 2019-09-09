import {Component, Input, OnInit} from '@angular/core';
import {letterUpModel} from "../../../letterUp.model";
import {lettersService} from "../../../letters.service";

@Component({
  selector: 'app-guessedLettersItem',
  templateUrl: './guessedLettersItem.component.html',
  styleUrls: ['./guessedLettersItem.component.css']
})
export class GuessedLettersItemComponent implements OnInit {

  @Input() letterItem :letterUpModel;


  constructor(private lettersService:lettersService) {

  }

  ngOnInit() {

  }

}
