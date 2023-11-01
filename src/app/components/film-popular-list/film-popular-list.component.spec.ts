import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPopularListComponent } from './film-popular-list.component';

describe('FilmPopularListComponent', () => {
  let component: FilmPopularListComponent;
  let fixture: ComponentFixture<FilmPopularListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmPopularListComponent]
    });
    fixture = TestBed.createComponent(FilmPopularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
