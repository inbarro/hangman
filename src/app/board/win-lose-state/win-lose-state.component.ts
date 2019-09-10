import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from "rxjs";
import { gameStateService } from '../../gameState.service';

@Component({
  selector: 'app-win-lose-state',
  templateUrl: './win-lose-state.component.html',
  styleUrls: ['./win-lose-state.component.css']
})
export class WinLoseStateComponent implements OnInit, OnDestroy {

  private winOrLose;
  private winLoseSub:Subscription;
  private winImgSrc;
  private loseImgSrc;

  constructor(private gameStateService:gameStateService) {
    this.winOrLose = "stillPlaying";
    this.winImgSrc = "./assets/winLose/yes_symbol.png";
    this.loseImgSrc = "./assets/winLose/shit_symbol.png";
  }

  ngOnInit() {
    this.winLoseSub =  this.gameStateService.winLoseSubject.subscribe((state :string ) => {
      this.winOrLose = state;
    })
  }

  ngOnDestroy(): void {
    this.winLoseSub.unsubscribe();
  }

}
