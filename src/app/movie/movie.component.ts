import { MoviesdataService } from './../../services/moviesdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  myMovie:any
  constructor(private movieService:MoviesdataService) { }

  ngOnInit(): void {
    this.myMovie=this.movieService.getNewMovie()
    console.log(this.myMovie)
  }


}
