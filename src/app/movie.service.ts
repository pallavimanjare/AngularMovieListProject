import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = "http://localhost:8081/getAllMovies";
  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get(this.url);
  }
}
