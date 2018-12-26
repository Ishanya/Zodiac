import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeComponent } from './admin-home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSlideToggleModule, MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Movie } from '../movie';
import { of } from 'rxjs';


describe('AdminHomeComponent', () => {
  let component: AdminHomeComponent;
  let fixture: ComponentFixture<AdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeComponent ],
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
    fixture = TestBed.createComponent(AdminHomeComponent);
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

  const adminServiceStub = {
    getAllMovie() {
        return of(movieList);
    }
}


it('should edit Movie', ()=>{
  expect(adminServiceStub.getAllMovie()).toBeTruthy;
  expect(component.getAllMovie()).toBe(1);
});

var num=1;
const adminServiceStubDel = {
   
  deleteMovie(num) {
      return 1;
  }
}


it('should edit Movie', ()=>{
expect(adminServiceStubDel.deleteMovie(1)).toBeTruthy;
expect(component.deleteMovie(1)).toBe(1);
});



it('should edit Movie', ()=>{
expect(adminServiceStubDel.deleteMovie(1)).toBeTruthy;
expect(component.deleteMovie(1)).toBe(0);
});

});
