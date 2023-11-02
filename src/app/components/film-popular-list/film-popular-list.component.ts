import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Film } from 'src/app/model/film-list-interfaces';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-film-popular-list',
  templateUrl: './film-popular-list.component.html',
  styleUrls: ['./film-popular-list.component.css']
})
export class FilmPopularListComponent {
  filmList: Film[] = [];
  filmDetail!: Film;

  constructor(private filmservice: FilmService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.filmservice.getFilmList().subscribe(resp => {
      this.filmList = resp.results;
    })
  }

  open(id: number, modal: any) {
    this.filmservice.findBy(id).subscribe(resp => {
      this.filmDetail = resp;
      this.modalService.open(modal);
    })
  }

}
