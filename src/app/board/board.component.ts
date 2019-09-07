import { Component, OnInit } from '@angular/core';
import { lettersService } from '../letters.service';
import { imageStateService } from '../imageState.service';
import { winLoseService } from '../winLose.service';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  currentMovie :string[];

  constructor( private letterService: lettersService, private imageStateService: imageStateService, private winLoseService: winLoseService) {

  }

  ngOnInit() {
    console.log("in initLetterService function")

    this.initBoard();
  }
  //
  initBoard(){

    this.currentMovie = this.randomSentence();//TODO uper case
    this.letterService.initLetterService(this.currentMovie);

    // this.imageStateService.initImageStateService()
    // this.winLoseService.initwinLoseService()
  }

  randomSentence(){    //TODO
    let movie = "SHIN CHEN"
    return movie.split("");
  }
  // initLetters(){
  //
  // }
  //
  // choseSentence(){
  //   //read from assets return sentence
  //   return String[];
  // }

}
