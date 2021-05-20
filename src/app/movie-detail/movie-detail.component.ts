import { Component, OnInit } from '@angular/core';
import {MovieService} from 'src/app/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movie';

export interface DialogData{
  movie: Movie
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

  currentmovie = null;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) { }
    
    movie : Movie;
    movieId : "";
    movieData : any;
    
  ngOnInit(): void {    
    this.movieId = this.route.snapshot.params.id;
    this.getMovie(this.movieId);
  }

  //later will implement api for this.
  getMovie(id): void {
    this.movieService.getMovieById(id) .subscribe(   movie => {
          this.movieData = movie.movie;   
          
        
              
        },
        error => {
          console.log(error);
        });
  }

}
