import { Component, OnInit,Input } from '@angular/core';
import {letterDownModel} from "../../../letterDown.model";
import {lettersService} from "../../../letters.service";
import { gameStateService} from"../../../gameState.service";



@Component({
  selector: 'app-lettersListItem',
  templateUrl: './lettersListItem.component.html',
  styleUrls: ['./lettersListItem.component.css']
})

export class LettersListItemComponent implements OnInit {

  @Input() letterItem :letterDownModel;

  constructor(private lettersService:lettersService, private gameStateService:gameStateService) {

  }

  ngOnInit() {
  }

}
