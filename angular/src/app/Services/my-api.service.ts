import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  NewPoke:IPokemon;
  id:any;
  public ERROR:any;
  private readonly LinkApi= "http://localhost:5000/api/v1/";

  constructor(private http:HttpClient) {
  
  }


 //pokemon
  //get
  getZoekOpdracht(zoekOpdracht: string){
    return this.http.get<IPokemon>(this.LinkApi +"pokémon"+ zoekOpdracht)
            .toPromise();
  }
  getZoekOpdrachten(zoekOpdracht: string="pokémon"){
    return this.http.get<IPokemon[]>(this.LinkApi +"pokémon"+ zoekOpdracht)
            .toPromise();
  }
  //  addPokemon(poke:IPokemon){
  //   return this.http.post<IPokemon>(this.LinkApi+"pokémon",{name:(poke.name),statistics:(poke.statistics),evolvesTo:(poke.evolvesTo),type:(poke.type),moves:(poke.moves),url:("http://localhost:5000/api/v1/pokémon/")})
  //   .toPromise() .then(res => console.log(res))
  //   .catch(err => { this.ERROR=err.error.errors,console.log(err.error.status);
  //   ;;
  //   });}
    addPokemon(poke:IPokemon){
      return this.http.post<IPokemon>(this.LinkApi+"pokémon",{name:(poke.name),statistics:(poke.statistics),evolvesTo:(poke.evolvesTo),type:(poke.type),moves:(poke.moves),url:("http://localhost:5000/api/v1/pokémon/")})
      .toPromise()
      .catch((err: HttpErrorResponse) => {
        // simple logging, but you can do a lot more, see below
        console.log('An error occurred:', err.error);
        this.ERROR=err.error.title;
      });}
      async addType(type:IType){
        try {
          return this.http.post<IType>(this.LinkApi + "Type", { type: (type.type), hasType: (type.hasType), strongAgainst: (type.strongAgainst), weakAgainst: (type.weakAgainst) })
            .toPromise();
        } catch (err) {
          // simple logging, but you can do a lot more, see below
          console.log('An error occurred:', err.error);
          this.ERROR = err.error.title;
        }}
        async addMove(move:IMove){
          try {
            return this.http.post<IMove>(this.LinkApi + "Moves/", { name: (move.name), damage: (move.damage), effect: (move.effect), canLearn: (move.canLearn),type:(move.type) })
              .toPromise();
          } catch (err) {
            // simple logging, but you can do a lot more, see below
            console.log('An error occurred:', err.error);
            this.ERROR = err.error.title;
          }}
          async updatePokemon(poke:IPokemon, id:Number){
            try {
              return this.http.put<IPokemon>(this.LinkApi + "pokémon/"+id, {id:(poke.id),name:(poke.name),statistics:(poke.statistics),evolvesTo:(poke.evolvesTo),type:(poke.type),moves:(poke.moves),url:(poke.url)})
                .toPromise();
            } catch (err) {
              // simple logging, but you can do a lot more, see below
              console.log('An error occurred:', err.error);
              this.ERROR = err.error.title;
            }}
        async updateType(type:IType){
          try {
            return this.http.put<IType>(this.LinkApi + "Type/"+type.type, { type: (type.type), hasType: (type.hasType), strongAgainst: (type.strongAgainst), weakAgainst: (type.weakAgainst) })
              .toPromise();
          } catch (err) {
            // simple logging, but you can do a lot more, see below
            console.log('An error occurred:', err.error);
            this.ERROR = err.error.title;
          }}

          async updateMove(move:IMove){
            try {
              return this.http.put<IMove>(this.LinkApi + "Moves/"+move.id, {id:(move.id) ,name: (move.name), damage: (move.damage), effect: (move.effect), canLearn: (move.canLearn),type:(move.type)})
                .toPromise();
            } catch (err) {
              // simple logging, but you can do a lot more, see below
              console.log('An error occurred:', err.error);
              this.ERROR = err.error.title;
            }}

   deletePokemon(id:number){
    return this.http.delete(this.LinkApi+"pokémon/"+id)
      .toPromise();
   }
   deleteMove(id:number){
    return this.http.delete(this.LinkApi+"Moves/"+id)
      .toPromise();
   }
   deleteType(id:number){
    return this.http.delete(this.LinkApi+"Type/"+id)
      .toPromise();
   }
  //moves
  getMove(zoekOpdracht: string="Moves"){
    console.log(this.LinkApi + zoekOpdracht);
    return this.http.get<IMove>(this.LinkApi + zoekOpdracht)
            .toPromise();
  }
  getMoves(zoekOpdracht: string="Moves"){
    return this.http.get<IMove[]>(this.LinkApi + zoekOpdracht)
            .toPromise();
  }
 //types
 getType(zoekOpdracht: string="Type"){
  return this.http.get<IType>(this.LinkApi + zoekOpdracht)
          .toPromise();
}
getTypes(zoekOpdracht: string="Type"){
  return this.http.get<IType[]>(this.LinkApi + zoekOpdracht)
          .toPromise();
}










}
  export interface IType {
      id?: number;
      type: string;
      hasType: IPokemon[];
      strongAgainst?: IType[];
      weakAgainst?:  IType[];
  }

  export interface IMove {
      id?: number;
      name: string;
      damage: number;
      type: IType;
      canLearn: IPokemon[];
      effect: string;
  }
  export interface IStatistics {
      id?: number;
      hp: number;
      attack: number;
      defense: number;
      sP_Def: number;
      sP_Atk: number;
      speed: number;
  }

  export interface IEvolvesTo {
      id?: number;
      evolvesIn: string;
      levelToEvolve: number;
      previousEvolution: string;
  }

  export interface IPokemon {
      id?: number;
      name: string;
      moves: IMove[];
      type: IType[];
      statistics: IStatistics;
      evolvesTo: IEvolvesTo;
      url: string;
  }



