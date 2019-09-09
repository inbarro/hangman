export class letterDownModel{
   type: string;
   data:string;

  constructor(type: string,  data:string) {
    this.type = type;
    this.data = data;
  }

  getImage(){
    return "./assets/ABC/"+ this.data + "_" +this.type +".jpg";
  }

  getLetter(){
    return this.data;
  }

  setToUnable(){
  this.type = "G";
  }



}
