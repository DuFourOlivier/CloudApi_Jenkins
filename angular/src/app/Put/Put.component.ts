import { Component, OnInit } from '@angular/core';
import { IEvolvesTo, IMove, IPokemon, IStatistics, IType, MyApiService } from '../Services/my-api.service';

@Component({
  selector: 'app-stats',
  templateUrl: './Put.component.html',
  styleUrls: ['./Put.component.css']
})
export class StatsComponent implements OnInit {
  ShowOption: number = 1;
  id:number;
  temp: IPokemon;
  stats: IStatistics = { id: 0, attack: 0, defense: 0, speed: 0, sP_Def: 0, hp: 0, sP_Atk: 0 };
  evolve: IEvolvesTo = { id: 0, evolvesIn: "none", levelToEvolve: 16, previousEvolution: "none" };
  Pokemon: IPokemon = { name: "", moves: [], type: [], statistics: null, evolvesTo: null, url: "" };
  type: IType = { type: "", hasType: [], strongAgainst: [], weakAgainst: [] }
  errorThrow: any;
  move: IMove = { name: "", damage: 0, effect: "", type: this.type, canLearn: [] }
  selectedpokemon: IPokemon;
  selectedtype: IType;
  // TypeWeakagainst: string;
  Getpokemons: IPokemon[];
   GetTypes: IType[];

  constructor(private http: MyApiService) { }

  async ngOnInit(): Promise<void> {
    this.Getpokemons = await this.http.getZoekOpdrachten("?length=50");
    this.GetTypes = await this.http.getTypes("Type?length=50");
  }
  async UpdatePokemon(name: string, health: number, attack: number, defense: number, spDef: number, spAtt: number, speed: number, evolveto: string, lv: number, prev: string) {
    // console.log(health);    
    console.log(this.selectedpokemon);
    var id= this.selectedpokemon;

    this.selectedpokemon=await this.http.getZoekOpdracht("/"+this.selectedpokemon);
    console.log(this.selectedpokemon);
    this.Pokemon=this.selectedpokemon;
    this.temp=this.selectedpokemon;
    console.log("begin poke");
    console.log(this.temp);

    this.Pokemon.statistics.hp = health;
    this.Pokemon.statistics.attack = attack;
    this.Pokemon.statistics.defense = defense;
    this.Pokemon.statistics.sP_Def = spDef;
    this.Pokemon.statistics.sP_Atk = spAtt;
    this.Pokemon.statistics.speed = speed;

    this.Pokemon.evolvesTo.evolvesIn = evolveto;
    this.Pokemon.evolvesTo.levelToEvolve = lv;
    this.Pokemon.evolvesTo.previousEvolution = prev;


    this.Pokemon.name = name;
    this.Pokemon.type = this.selectedpokemon.type;
    this.Pokemon.type.push(this.selectedpokemon.type[0]);

    this.Pokemon.moves = this.selectedpokemon.moves;
    this.Pokemon.moves.push(this.selectedpokemon.moves[0]);


    console.log("einde poke");
    console.log(this.Pokemon);
    console.log(this.Pokemon.id);
    this.http.updatePokemon(this.Pokemon,this.Pokemon.id),
      this.errorThrow = this.http.ERROR;
  }

}
