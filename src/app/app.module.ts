import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmPopularListComponent } from './components/film-popular-list/film-popular-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmRatedListComponent } from './components/film-rated-list/film-rated-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmItemComponent,
    FilmPopularListComponent,
    FilmRatedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
