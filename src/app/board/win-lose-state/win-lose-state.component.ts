import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from "rxjs";
import { gameStateService } from '../../gameState.service';

@Component({
  selector: 'app-win-lose-state',
  templateUrl: './win-lose-state.component.html',
  styleUrls: ['./win-lose-state.component.css']
})
export class WinLoseStateComponent implements OnInit, OnDestroy {

  lives: number;
  private minusLifeSub:Subscription;
  minusLife = new EventEmitter<number>();

  constructor(private gameStateService:gameStateService) { }

  ngOnInit() {
    this.minusLifeSub =  this.gameStateService.minusLife.subscribe((lives :number ) => {
      this.minusLife.emit(lives);
      this.lives = lives;
    })
  }

  ngOnDestroy(): void {
    this.minusLifeSub.unsubscribe();
  }

}
