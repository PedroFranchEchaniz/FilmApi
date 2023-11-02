import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film, FilmPopularityResponse } from '../model/film-list-interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilmList(): Observable<FilmPopularityResponse> {
    return this.http.get<FilmPopularityResponse>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=cb240d50801976c6f75926069581b0e3');
  }

  getRatedFilm(): Observable<FilmPopularityResponse> {
    return this.http.get<FilmPopularityResponse>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=cb240d50801976c6f75926069581b0e3');
  }

  findBy(id: number): Observable<Film> {
    return this.http.get<Film>(`https://api.themoviedb.org/3/movie/${id}?api_key=cb240d50801976c6f75926069581b0e3`)
  }
}

