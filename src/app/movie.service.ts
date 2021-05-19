import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = "http://localhost:8081/";
  constructor(private http:HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(this.url+'getAllMovies');
  }
  getMovieById(id): Observable<any> {
    return this.http.get(this.url+'getMovieById/'+id);
  }

 
}
