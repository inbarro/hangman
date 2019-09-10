import { Component, OnInit } from '@angular/core';
import { lettersService } from '../letters.service';
import { gameStateService } from '../gameState.service';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  currentMovie :string[];
  hangmanlogoImgSource: string;

  constructor( private letterService: lettersService, private gameStateService:gameStateService) {
    this.hangmanlogoImgSource  = "./assets/hangmanLogo.jpeg"
  }

  ngOnInit() {
    this.initBoard();
    this.gameStateService.resetSubject.subscribe((state :string ) => {
      this.initBoard();
    })
  }
  //
  initBoard(){
    this.currentMovie = this.randomSentence();//TODO uper case
    this.letterService.initLetterService(this.currentMovie);

    // this.imageStateService.initImageStateService()
    // this.winLoseService.initwinLoseService()
  }

  randomSentence(){    //TODO
    let movie = "SHIN CHEN";
    return movie.split("");
  }

}
