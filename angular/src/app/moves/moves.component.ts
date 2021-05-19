import { Component, OnInit } from '@angular/core';
import { IMove, MyApiService } from '../Services/my-api.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {

  ZoekOpdrachten: IMove[];
  page:number=0;
  viewnr:Number=2;
  sortoption:String='id';
  isDisabled:boolean=true;
  constructor(private httpService: MyApiService) { }

 async ngOnInit() {
   this.ZoekOpdrachten= await this.httpService.getMoves();
   console.log(this.ZoekOpdrachten[0]);
  }
  async Zoek(inputGebruiker:string){
    if (inputGebruiker.includes("all")) {
      this.ZoekOpdrachten= await this.httpService.getMoves("Moves?page="+this.page+"&sort="+this.sortoption+"&length="+this.viewnr);
    }
    else if(inputGebruiker.includes("1") || inputGebruiker.includes("2") || inputGebruiker.includes("3")|| inputGebruiker.includes("4")|| inputGebruiker.includes("5")|| inputGebruiker.includes("6")|| inputGebruiker.includes("7")|| inputGebruiker.includes("8")|| inputGebruiker.includes("9")){
      console.log("Moves?id="+inputGebruiker);
      this.ZoekOpdrachten = [];
      this.ZoekOpdrachten.push ((await this.httpService.getMove("Moves/"+inputGebruiker+"/id")));

}
    else {
    this.ZoekOpdrachten = [];
    this.ZoekOpdrachten.push( await this.httpService.getMove("Moves/"+inputGebruiker));
  }}
  async Page(teken:string){
    if (teken.includes("-")) {
      if (this.page>0) {
        this.page-=1;
        console.log(this.page);
        if (this.page==0) {
          this.isDisabled=true;
        }
        
      }
      else this.isDisabled=true;
      
    }else{
      this.page+=1;
      console.log(this.page);
      this.isDisabled=false;
    }
    this.ZoekOpdrachten= await this.httpService.getMoves("Moves?page="+this.page+"&sort="+this.sortoption+"&length="+this.viewnr);
  }
}
