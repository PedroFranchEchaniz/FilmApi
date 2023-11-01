import { Component } from '@angular/core';
import { Film } from 'src/app/model/film-list-interfaces';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-film-rated-list',
  templateUrl: './film-rated-list.component.html',
  styleUrls: ['./film-rated-list.component.css']
})
export class FilmRatedListComponent {

  filmRatedList: Film[]= [];

  constructor(private filmRatedService: FilmService){}

  ngOnInit(): void{
    this.filmRatedService.getRatedFilm().subscribe(resp =>{
      this.filmRatedList = resp.results;
    })
  }
}
