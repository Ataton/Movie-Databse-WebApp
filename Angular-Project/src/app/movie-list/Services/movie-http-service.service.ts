import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDB } from '../movieDB';
import { BaseTopMovieResponse } from './base-top-movie-response';

@Injectable({
  providedIn: 'root'
})
export class MovieHttpServiceService {

  constructor(private httpClient: HttpClient) {


  }

  public async getTopRatedMovies(page: number): Promise<MovieDB[]> {
    
    const response : BaseTopMovieResponse = await this.httpClient.get<any>(`https://api.themoviedb.org/3/movie/top_rated?api_key=a51b17f07161ad5f5646855d878e4c1e&language=en-US&page=${page}`).toPromise();
    const topRatedMovies : MovieDB[] = response.results;
    return topRatedMovies;
    

  }

  

}
