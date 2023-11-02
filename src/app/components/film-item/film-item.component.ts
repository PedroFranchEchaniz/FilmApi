import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from 'src/app/model/film-list-interfaces';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent {

  @Input() film!: Film;
  @Output() filmClicked = new EventEmitter<number>();

  getImg() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.film.poster_path}`
  }

  viewFilmDetail() {
    this.filmClicked.emit(this.film.id);
  }
}
