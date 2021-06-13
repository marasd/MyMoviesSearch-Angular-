import { Movies } from './searchmovies/movies';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchmoviesComponent } from './searchmovies/searchmovies.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'SearchMovies',component:SearchmoviesComponent},
  {path:'movie',component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
