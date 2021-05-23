import { Component, OnInit } from '@angular/core';
import { IEvolvesTo, IMove, IPokemon, IStatistics, IType, MyApiService } from '../Services/my-api.service';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
  ShowOption: number = 1;
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
  AddPokemon(name: string, health: number, attack: number, defense: number, spDef: number, spAtt: number, speed: number, evolveto: string, lv: number, prev: string) {
    // console.log(health);
    // console.log(name);
    // console.log(evolveto);
    this.stats.hp = health;
    this.stats.attack = attack;
    this.stats.defense = defense;
    this.stats.sP_Def = spDef;
    this.stats.sP_Atk = spAtt;
    this.stats.speed = speed;
    this.evolve.evolvesIn = evolveto;
    this.evolve.levelToEvolve = lv;
    this.evolve.previousEvolution = prev;

    this.Pokemon.name = name;
    this.Pokemon.type = [];
    this.Pokemon.moves = [];
    this.Pokemon.statistics = this.stats;
    this.Pokemon.evolvesTo = this.evolve;
    this.http.addPokemon(this.Pokemon),
      this.errorThrow = this.http.ERROR;
  }
  async AddType(type: string) {
    // console.log(health);
    // console.log(name);
    // console.log(evolveto);
    // this.selectedpokemon=await this.http.getZoekOpdracht("/"+this.selectedpokemon+"/naam");;

    this.type.type = type;
    this.type.strongAgainst = [];
    this.type.weakAgainst = [];
    this.type.hasType = [];
    this.http.addType(this.type),
      this.errorThrow = this.http.ERROR;
    // this.selectedpokemon=await this.http.getZoekOpdracht("/"+this.selectedpokemon+"/naam");;
    // // this.type.strongAgainst=[await this.http.getType("Type/"+this.selectedtype)];;
    // // this.type.weakAgainst=[await this.http.getType("Type/"+this.TypeWeakagainst)];;
    // // this.http.updateType(this.type),
    //   this.errorThrow = this.http.ERROR;
    // console.log(this.type);

  }

 async AddMove(name: string, damage: number, effect: string) {

    this.move.name = name;
    this.move.damage = damage;
    this.move.effect = effect;

    console.log(this.move);
    this.http.addMove(this.move),
      this.errorThrow = this.http.ERROR;
      console.log(this.selectedpokemon);
      // this.selectedpokemon=await this.http.getZoekOpdracht("/"+this.selectedpokemon+"/naam");
      // this.move.type=null;
    //   this.move.canLearn=[        {
    //     id: (this.selectedpokemon.id),
    //     name: (this.selectedpokemon.name),
    //     moves: (this.selectedpokemon.moves),
    //     type: (this.selectedpokemon.type),
    //     statistics: (this.selectedpokemon.statistics),
    //     evolvesTo: (this.selectedpokemon.evolvesTo),
    //     url: (this.selectedpokemon.url)
    // // }];
    // this.http.updateMove(this.move),
    //   this.errorThrow = this.http.ERROR;
  }

}
