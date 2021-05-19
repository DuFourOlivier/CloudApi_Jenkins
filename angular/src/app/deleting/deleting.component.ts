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
  Delete(id:number){
  console.log(id);
  this.http.deletePokemon(id);}
}
