export class letterDownModel{
  public type: string;
  public data:string;

  constructor(   type: string,  data:string) {
    this.type = type;
    this.data = data;
  }

  getImage(){
    return "./assets/ABC/"+ this.data + "_" +this.type +".jpg";
  }

  // getcolor(){

  // }


}
