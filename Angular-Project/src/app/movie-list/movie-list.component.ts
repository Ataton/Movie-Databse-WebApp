import { Component, OnInit } from '@angular/core';
import { MovieDB } from './movieDB';
import { MovieHttpServiceService } from './Services/movie-http-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  pageTitle = 'Movie List';
  movieList: MovieDB[] = [];
  currentPage: number = 1
  filteredMovieDB: MovieDB[] = []
  private _movieFilter = '';

  get movieFilter(): string {
    return this._movieFilter;
  }
  set movieFilter(value: string) {
    this._movieFilter = value;
  }

  performFilter(): MovieDB[] {
    this._movieFilter = this._movieFilter.toLocaleLowerCase();
    this.filteredMovieDB = this.movieList.filter((movieListItem: MovieDB) => movieListItem.title.toLocaleLowerCase().includes(this._movieFilter));
    console.log(this.filteredMovieDB);
    return this.filteredMovieDB
  }




  constructor(private movieHttpService: MovieHttpServiceService) { }

  async ngOnInit(): Promise<void> {

    this.movieList = await this.movieHttpService.getTopRatedMovies(this.currentPage);
    this.filteredMovieDB = this.movieList;
    this.movieFilter = ""

  }

  public async changePageUp(): Promise<void> {
    this.currentPage++;
    // console.log(this.currentPage);
    this.movieList = await this.movieHttpService.getTopRatedMovies(this.currentPage)
    this.filteredMovieDB = this.movieList;
  }

  public async changePageDn() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    // console.log(this.currentPage);

    this.movieList = await this.movieHttpService.getTopRatedMovies(this.currentPage)
    this.filteredMovieDB = this.movieList;

  }


}
