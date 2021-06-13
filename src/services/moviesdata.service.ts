import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesdataService {
  myMovieService
  constructor(private http:HttpClient) { }

  getMoviesByYear(movieyear:number){
    let url="https://api.themoviedb.org/3/discover/movie?api_key=a302f1cfb171cb5c741ec01c6267afd5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year="+movieyear.toString()+"&with_watch_monetization_types=flatrate"
    return this.http.get(url)
  }
  setNewMovie(newMovie){
    this.myMovieService = newMovie
  }
  getNewMovie(){
    return this.myMovieService
  }
}
