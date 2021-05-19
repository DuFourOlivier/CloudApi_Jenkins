import { Component, OnInit } from '@angular/core';
import { IPokemon, MyApiService } from '../Services/my-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ZoekOpdrachten: IPokemon[];
  constructor(private httpService: MyApiService) { }

 async ngOnInit() {
   this.ZoekOpdrachten= await this.httpService.getZoekOpdrachten();
   //console.log(this.ZoekOpdracht[0]);
  }
  async Zoek(inputGebruiker:string){
    if (inputGebruiker.includes("/")) {
      this.ZoekOpdrachten = [];
       this.ZoekOpdrachten.push( await this.httpService.getZoekOpdracht(inputGebruiker));
    }
    else this.ZoekOpdrachten= await this.httpService.getZoekOpdrachten(inputGebruiker);

  }
}
