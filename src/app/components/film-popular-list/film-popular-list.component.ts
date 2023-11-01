import { Component } from '@angular/core';
import { Film } from 'src/app/model/film-list-interfaces';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-film-popular-list',
  templateUrl: './film-popular-list.component.html',
  styleUrls: ['./film-popular-list.component.css']
})
export class FilmPopularListComponent {
 filmList: Film [] = [];

 constructor(private filmservice: FilmService) {}

 ngOnInit(): void{
  this.filmservice.getFilmList().subscribe(resp =>{
    this.filmList = resp.results;
  })
 }
}
