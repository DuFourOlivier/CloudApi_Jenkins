import { Component, OnInit } from '@angular/core';
import {ApiPokemon, ExterneApiService} from '../Services/externe-api.service';
@Component({
  selector: 'app-evolution',
  templateUrl: './pokéQuiz.component.html',
  styleUrls: ['./pokéQuiz.component.css']
})
export class EvolutionComponent implements OnInit {

  exApiPokemon:ApiPokemon
  nrPokemon:number=3
  linkFoto:string
  constructor(private exApi:ExterneApiService){

  }
 //Pagina 1
 TitleQuiz:string="DE POKEMON QUIZ"
 SubTitle:string=" Hoe goed ken jij je Pokémons? Laten we het snel uitvinden!"
 Button_Start:string="Klik om te beginnen"
 //Pagina 2 t.e.m. 5
 TitlePage2:string="Vraag 1"
 TitlePage3:string="Vraag 2"
 TitlePage4:string="Vraag 3"
 TitlePage5:string="Vraag 4"
 TitlePage6:string="Resultaat!"
 // De algemene vraag
 Question:string="Vanaf welke generatie komt de volgende pokémon het eerste voor?"
 // Antwoord opties bij select
 q1:string="Gen I"
 q2:string="Gen III"
 q3:string="Gen V"
 q4:string="Gen II"
 q5:string="Gen VII"
 // aantal vragen
 TotalQuestions:number=4
 // Inhoud buttons
 GoBack:string="Back"
 GoForward:string="Next"
 Submit:string="Submit"
 // Pagina + eindresultaat
 Page:number=1
 Resultaat:number=0
 final:boolean=false;

 private Anwser1:number=1
 private Anwser2:number=1
 private Anwser3:number=1
 private Anwser4:number=1

  ngOnInit(): void {
    this.exApi.GetApi(this.nrPokemon).subscribe((result)=>{
      this.exApiPokemon=result
      this.linkFoto=this.exApiPokemon.data.images.small
      console.log(this.linkFoto);
    })
  }

  updatePicture(){

    this.exApi.GetApi(this.nrPokemon).subscribe((result)=>{
      this.exApiPokemon=result
      this.linkFoto=this.exApiPokemon.data.images.small
      console.log(this.linkFoto);
    })
  }

  Startpage(){
    this.Page=1;
    this.Page++;
  }
      

  NextPage(){
    this.Page++;
    this.nrPokemon+=20;
    this.updatePicture();
    console.log(this.Page);
    }
  PreviousPage(){
    if (this.Page>1) {
          this.Page--;
    this.nrPokemon-=20;
    this.updatePicture();
    }

    console.log(this.Page);
  }
  Result(){
    this.ResultCalculator();
    this.Page++;
    this.final==true;
  }
  ResultCalculator(){
    if (this.Anwser1==1) {
      this.Resultaat++;
    }
    if (this.Anwser2==3) {
      this.Resultaat++;
    }
    if (this.Anwser3==4) {
      this.Resultaat++;
    }
    if (this.Anwser4==2) {
      this.Resultaat++;
    }
   }

}
