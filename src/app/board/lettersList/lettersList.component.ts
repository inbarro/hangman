import { Component, OnInit } from '@angular/core';
import { lettersService } from '../../letters.service'
import {letterDownModel} from "../../letterDown.model";


@Component({
  selector: 'app-lettersList',
  templateUrl: './lettersList.component.html',
  styleUrls: ['./lettersList.component.css']
})
export class LettersListComponent implements OnInit {

  lettersDown: letterDownModel[];


  constructor(private lettersService:lettersService) { }

  ngOnInit() {
    this.lettersDown = this.lettersService.lettersDown;
  }

}
