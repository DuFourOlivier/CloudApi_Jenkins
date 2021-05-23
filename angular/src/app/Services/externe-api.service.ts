import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExterneApiService {
  constructor(private http : HttpClient) { }



  GetApi(nr:number=4){
    return this.http.get<ApiPokemon>("https://api.pokemontcg.io/v2/cards/xy1-"+nr);
  }
}


  export interface Attack {
      name: string;
      cost: string[];
      convertedEnergyCost: number;
      damage: string;
      text: string;
  }

  export interface Weakness {
      type: string;
      value: string;
  }

  export interface Legalities {
      unlimited: string;
      expanded: string;
  }

  export interface Images {
      symbol: string;
      logo: string;
  }

  export interface Set {
      id: string;
      name: string;
      series: string;
      printedTotal: number;
      total: number;
      legalities: Legalities;
      ptcgoCode: string;
      releaseDate: string;
      updatedAt: string;
      images: Images;
  }

  export interface Legalities2 {
      unlimited: string;
      expanded: string;
  }

  export interface Images2 {
      small: string;
      large: string;
  }

  export interface Normal {
      low: number;
      mid: number;
      high: number;
      market: number;
      directLow: number;
  }

  export interface ReverseHolofoil {
      low: number;
      mid: number;
      high: number;
      market: number;
      directLow: number;
  }

  export interface Prices {
      normal: Normal;
      reverseHolofoil: ReverseHolofoil;
  }

  export interface Tcgplayer {
      url: string;
      updatedAt: string;
      prices: Prices;
  }

  export interface Data {
      id: string;
      name: string;
      supertype: string;
      subtypes: string[];
      hp: string;
      types: string[];
      evolvesFrom: string;
      evolvesTo: string[];
      attacks: Attack[];
      weaknesses: Weakness[];
      retreatCost: string[];
      convertedRetreatCost: number;
      set: Set;
      number: string;
      artist: string;
      rarity: string;
      flavorText: string;
      nationalPokedexNumbers: number[];
      legalities: Legalities2;
      images: Images2;
      tcgplayer: Tcgplayer;
  }

  export interface ApiPokemon {
      data: Data;
  }



