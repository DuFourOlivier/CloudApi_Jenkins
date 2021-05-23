import { Component, OnInit } from '@angular/core';
import { IEvolvesTo, IPokemon, IStatistics, MyApiService } from '../Services/my-api.service';

@Component({
  selector: 'app-deleting',
  templateUrl: './deleting.component.html',
  styleUrls: ['./deleting.component.css']
})
export class DeletingComponent implements OnInit {
ShowOption:number=1;
  constructor(private http:MyApiService) { }

  ngOnInit(): void {}
  DeletePokemon(id:number){
  console.log(id);
  this.http.deletePokemon(id);}
  
  DeleteType(id:number){
  this.http.deleteType(id);}
  
  DeleteMove(id:number){
  this.http.deleteMove(id);}
}



