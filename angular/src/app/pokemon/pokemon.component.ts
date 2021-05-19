import { Component, OnInit } from '@angular/core';
import { IPokemon, MyApiService } from '../Services/my-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  ZoekOpdrachten: IPokemon[];
  page:number=0;
  viewnr:Number=2;
  sortoption:String='id';
  pokesearch:boolean=false;
  isDisabled:boolean=true;
  constructor(private httpService: MyApiService) { }

 async ngOnInit() {
   this.ZoekOpdrachten= await this.httpService.getZoekOpdrachten("/");
   //console.log(this.ZoekOpdracht[0]);
  }
  async Zoek(inputGebruiker:string){
    if (inputGebruiker=="all") {console.log("?page="+this.page+"&sort="+this.sortoption+"&length="+this.viewnr);
      this.ZoekOpdrachten= await this.httpService.getZoekOpdrachten("?page="+this.page+"&sort="+this.sortoption+"&length="+this.viewnr);
      
      
      this.pokesearch=false;    
    }
       
    else if(inputGebruiker.includes("1") || inputGebruiker.includes("2") || inputGebruiker.includes("3")|| inputGebruiker.includes("4")|| inputGebruiker.includes("5")|| inputGebruiker.includes("6")|| inputGebruiker.includes("7")|| inputGebruiker.includes("8")|| inputGebruiker.includes("9")){
      this.ZoekOpdrachten = [];
      this.ZoekOpdrachten.push( await this.httpService.getZoekOpdracht("/"+inputGebruiker));
      this.pokesearch=true; }
    else {
      this.ZoekOpdrachten = [];
      this.ZoekOpdrachten.push( await this.httpService.getZoekOpdracht("/"+inputGebruiker+"/naam"));
      this.pokesearch=true;
    }
    }

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
      this.ZoekOpdrachten= await this.httpService.getZoekOpdrachten("?page="+this.page+"&sort="+this.sortoption+"&length="+this.viewnr);
    }
}
