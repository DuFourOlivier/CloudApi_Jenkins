import { Component, OnInit } from '@angular/core';
import { IEvolvesTo, IPokemon, IStatistics, MyApiService } from '../Services/my-api.service';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
  ShowOption:number=1;
  stats:IStatistics= {id:0,attack:0,defense:0,speed:0,sP_Def:0,hp:0,sP_Atk:0};
  evolve:IEvolvesTo={id:0,evolvesIn:"none",levelToEvolve:16,previousEvolution:"none"};
  Pokemon:IPokemon ={name:"",moves:[],type:[],statistics:null,evolvesTo:null,url:""};
  errorThrow:any;
  constructor(private http: MyApiService) { }

  ngOnInit(): void {
  }
AddPokemon(name:string, health:number,attack:number,defense:number,spDef:number,spAtt:number,speed:number, evolveto:string,lv:number,prev:string){
  // console.log(health);
  // console.log(name);
  // console.log(evolveto);
  this.stats.hp=health;
  this.stats.attack=attack;
  this.stats.defense=defense;
  this.stats.sP_Def=spDef;
  this.stats.sP_Atk=spAtt;
  this.stats.speed=speed;
  this.evolve.evolvesIn=evolveto;
  this.evolve.levelToEvolve=lv;
  this.evolve.previousEvolution=prev;

  this.Pokemon.name=name;
  this.Pokemon.type=[];
  this.Pokemon.moves=[];
  this.Pokemon.statistics=this.stats;
  this.Pokemon.evolvesTo=this.evolve;
  this.http.addPokemon(this.Pokemon),
  this.errorThrow=this.http.ERROR;
  };
}
