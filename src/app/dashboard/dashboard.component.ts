import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {MovieService} from '../movie.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  shouldShowPopUp = false;
  popupMovie = null;
  all_ratings = ["TV-Y", "TV-Y7","TV-G","G","TV-PG","PG","TV-14","PG-13","R","NC-17","TV-MA"];
  ratings = this.all_ratings.map((item, index) => ({
    rating: item,
    val : index + 1
  }))
  title = 'movie-display';
  movies: Movie[] = new Array();
  display_movies: Movie[] ;

  constructor(private moviesData : MovieService , private router: Router ){}

 
   showCard(movie: Movie){
     
    console.log("shoCard" + movie);
    if(movie != null){
     alert(movie.id);
    // this.popupMovie = movie;
     //this.openDialog();
     this.router.navigate(['/movieDetails/'+movie.id]);
    }
  }
  
  getRatingValue(rating: string)
  {
    for(let json in this.ratings)
    {
      
      if(this.ratings[json]["rating"] == rating)
      {
        return this.ratings[json]["val"];
      }
    }
    return NaN;
  }
  searchString(searchs : string)
  {
    this.display_movies = this.movies.filter(movie => movie.title.toLowerCase().indexOf(searchs.toLowerCase()) != -1)
  }
  sort_by_emitter(sorter : string)
  {
    console.log("sort1 called.");
    if(sorter === "All")
    {
      this.display_movies = this.movies;
    }
    else if(sorter === "Rating: Low to High")
      this.display_movies = this.movies.sort((a,b) => (isNaN(parseInt(a.imdbRating)) ? 0 : parseInt(a.imdbRating)  ) 
      - (isNaN(parseInt(b.imdbRating) )? 0 : parseInt(b.imdbRating)));
  
    
  }
  moviesJsonData : any;
  ngOnInit(){
    this.moviesData.getMovies().subscribe((result:any)=>{
      this.moviesJsonData = result.movies.movies;
      this.display_movies = this.moviesJsonData.map(json => 
        Object.assign(new Movie, {         
          language: json.Language,
          location: json.Location,
          plot:json.Plot,
          poster: json.Poster,
          title:json.Title,
          imdbRating: json.imdbRating,
          listingType: json.listingType,
          id:json.id

        }));
      this.movies = this.display_movies;
    
  
    })
  
  }


}
