import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmRatedListComponent } from './film-rated-list.component';

describe('FilmRatedListComponent', () => {
  let component: FilmRatedListComponent;
  let fixture: ComponentFixture<FilmRatedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmRatedListComponent]
    });
    fixture = TestBed.createComponent(FilmRatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
