import { Component, Input } from '@angular/core';
import { Film } from 'src/app/model/film-list-interfaces';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent {

  @Input()film!: Film;

  getImg(){
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.film.poster_path}`
  }
}
