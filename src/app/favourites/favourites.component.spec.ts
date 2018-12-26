import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesComponent } from './favourites.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSlideToggleModule, MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Favourites } from '../favourites';
import { Movie } from '../movie';
import { of } from 'rxjs';
describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritesComponent ],
      imports:[
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        NgbModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  const movieList : Movie[]=[{
    movieId:1,
    movieName:"kal ho na ho",
    moviePosterUrl:"image.jpg",
    movieReleaseDate:"1995-12-12",
    movieDescription:"this is a pure bollywood masala",
    movieVideoUrl:"http://www.youtube.com",
    movieAgeLimit:18,
    movieCategory:"Horror",
    movieLanguage:"Hindi"
  }];

  const FavmovieList:Favourites[]=[{
    movieId:1,
    movieName:"kal ho na ho",
    moviePosterUrl:"image.jpg",
    movieReleaseDate:"1995-12-12",
    movieDescription:"this is a pure bollywood masala",
    movieVideoUrl:"http://www.youtube.com",
    movieAgeLimit:18,
    movieCategory:"Horror",
    movieLanguage:"Hindi",
    userId:"Is1234"
  }];

  const movieServiceStub = {
    getFavList() {
        return of(FavmovieList);
    }
}


it('should get all fav Movie', ()=>{
  expect(movieServiceStub.getFavList()).toBeTruthy;
  expect(component.getAllFav()).toBe(1);
});

const movieServiceStubDel = {
  requestFavouriteDelete(FavmovieList) {
      return of(FavmovieList[0]);
  }
}


it('should get all fav Movie', ()=>{
expect(movieServiceStubDel.requestFavouriteDelete(FavmovieList[0])).toBeTruthy;
expect(component.deleteFav(FavmovieList)).toBe(1);
});


});
