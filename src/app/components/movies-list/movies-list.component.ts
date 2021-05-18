import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any;
  currentMovie = null;
  currentIndex = -1;
  name = '';
  
  constructor(private moviesService : MoviesService) { }
  
  ngOnInit(): void {
    this.readMovies();
  }

  readMovies(): void {
    this.moviesService.readAll()
      .subscribe(
        movies => {
          this.movies = movies;
          console.log(movies);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readMovies();
    this.currentMovie = null;
    this.currentIndex = -1;
  }

  setCurrentMovie(movie, index): void {
    this.currentMovie = movie;
    this.currentIndex = index;
  }



  searchByName(): void {
    this.moviesService.searchByName(this.name)
      .subscribe(
        movies => {
          this.movies = this.movies;
          console.log(movies);
        },
        error => {
          console.log(error);
        });
  }
}
