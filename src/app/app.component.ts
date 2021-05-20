import { Component } from '@angular/core';
import { Movie } from './movie';
import moviesList from '../app/moviesList.json';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import {MovieService} from './movie.service'
import { Router } from '@angular/router';


export interface DialogData{
  movie: Movie
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {


constructor( ){}


  ngOnInit(){

   
  }


}
