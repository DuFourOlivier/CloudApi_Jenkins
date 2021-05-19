import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HomeComponent } from './home/home.component';
import { MovesComponent } from './moves/moves.component';
import { TypesComponent } from './types/types.component';
import { EvolutionComponent } from './evolution/evolution.component';
import { StatsComponent } from './stats/stats.component';
import { AddingComponent } from './adding/adding.component';
import { DeletingComponent } from './deleting/deleting.component';
export const routerConfig: Routes = [
  {
      path: 'Home',
      component: HomeComponent
  },
  {
      path: 'pokemon',
      component: PokemonComponent
  },
  {
      path: 'Moves',
      component: MovesComponent
  },
  {
    path: 'Types',
    component: TypesComponent
  },
  {
    path: 'Evolution',
    component: EvolutionComponent
  },  
  {
    path: 'Statistics',
    component: StatsComponent
  },
  {
    path: 'Adding',
    component: AddingComponent
  },
  {
    path: 'Deleting',
    component: DeletingComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    HomeComponent,
    MovesComponent,
    TypesComponent,
    EvolutionComponent,
    StatsComponent,
    AddingComponent,
    DeletingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
