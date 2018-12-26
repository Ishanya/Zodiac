import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditMovieComponent } from './admin-edit-movie.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSlideToggleModule, MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminserviceService } from '../adminservice.service';
import { Movie } from '../movie';
import { of } from 'rxjs';


describe('AdminEditMovieComponent', () => {
  let component: AdminEditMovieComponent;
  let fixture: ComponentFixture<AdminEditMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditMovieComponent ],
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
      providers:[{provide: AdminserviceService, useValue:adminServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditMovieComponent);
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
    editMovie(movie:Movie) {
        return of(movieList[0]);
    }
}


it('should edit Movie', ()=>{
  expect(adminServiceStub.editMovie(movieList[0])).toBeTruthy;
  expect(component.editData()).toBe(1);
})

});
