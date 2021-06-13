import { Movies } from './movies';
import { MoviesdataService } from './../../services/moviesdata.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.scss']
})
export class SearchmoviesComponent implements OnInit {

//  results:string
  constructor(private sf:FormBuilder,private movieService:MoviesdataService) { }
  title = 'MyMovies';

  searchForm :FormGroup;
  movieStream:Movies |any;
  searching(){
    let searchV=this.searchForm.get('search')?.value
    let moviesObserv=this.movieService.getMoviesByYear(searchV)
    moviesObserv.subscribe(

      data => {


        this.movieStream=(data['results'])
        console.log(data['results'])

      }

    )
  }
  ngOnInit(): void {
    this.searchForm = this.sf.group({
      search: ['',[Validators.required, Validators.required,Validators.pattern("^[0-9][0-9][0-9][0-9]$") ,Validators.max(2021), Validators.min(1888)]]
    })
  }
  setmoviesDetails(movieUser){
    this.movieService.setNewMovie(movieUser)
  }

}


