import { MovieDB } from "../movieDB";

export class BaseTopMovieResponse {
        page: number;
        results: MovieDB[];
        total_pages: number;
        total_results: number;
    }