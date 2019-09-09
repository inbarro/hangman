import {Optional} from "@angular/core";
export class letterUpModel {
  type: string;
  data: string;


  constructor(type: string, data: string) {
    this.type = type;
    this.data = data;
  }

  getType() {
    return this.type;
  }

  getLetter() {
    return this.data;
  }

  getColor() {
    if (this.type === "randomed") {
      return 'blue';
    } else if (this.type === "chosen") {
      return 'black';
    } else if (this.type === "space") {
      return 'transparent';
    }
    else{
      return "transparent";
    }
  }

  setType(type: string){
    this.type = type;

  }

  getLineImageSource() {
    if (this.type === "randomed") {
      return "./assets/RectangleBlue.png";
    } else if (this.type === "chosen") {
      return "./assets/RectangleBlack.png";
    }
  }

  isBlueOrBlack(){
    if (this.type ==='randomed' || this.type ==='chosen'){
      return true
    }
    return false
  }




}
