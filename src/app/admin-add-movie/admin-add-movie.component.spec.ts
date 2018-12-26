import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { AdminAddMovieComponent } from './admin-add-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSlideToggleModule, MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../movie';
import { of, Observable } from 'rxjs';
import { AdminserviceService } from '../adminservice.service';


describe('AdminAddMovieComponent', () => {
  let component: AdminAddMovieComponent;
  let fixture: ComponentFixture<AdminAddMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddMovieComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
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
    fixture = TestBed.createComponent(AdminAddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('form valid',()=>{
    expect(component.addMovieForm.valid).toBeFalsy;
    });
    
    it('Movie name valid',()=>{
      let errors={};
      let mName=component.addMovieForm.controls.movieName;
      mName.setValue("Hello");
      errors=mName.errors || {};
      expect(errors['required']).toBeTruthy;
      expect(errors['minLength']).toBeTruthy;
    });

    it('Movie name valid',()=>{
      let errors={};
      let mName=component.addMovieForm.controls.movieName;
      mName.setValue("He");
      errors=mName.errors || {};
      expect(errors['required']).toBeTruthy;
      expect(errors['minLength']).toBeFalsy;
    });

    it('Movie name ',()=>{
      let movieName=component.addMovieForm.controls['movieName'];
      expect(movieName.valid).toBeFalsy();
    });


    it('PosterUrl valid',()=>{
      let errors={};
      let poster=component.addMovieForm.controls.posterUrl;
      poster.setValue("https://www.amazon.com/pictures");
      errors=poster.errors || {};
      expect(errors['required']).toBeTruthy;
      expect(errors['pattern']).toBeTruthy;
    });

    it('PosterUrl valid',()=>{
      let errors={};
      let poster=component.addMovieForm.controls.posterUrl;
      poster.setValue("hhhudbhg.com");
      errors=poster.errors || {};
      expect(errors['required']).toBeTruthy;
      expect(errors['pattern']).toBeFalsy;
    });

    it('Poster Url',()=>{
      let poster=component.addMovieForm.controls['posterUrl'];
      expect(poster.valid).toBeFalsy();
    });

    it('ReleaseDate valid',()=>{
      let errors={};
      let release=component.addMovieForm.controls.releaseDate;
      release.setValue("2014-03-02");
      errors=release.errors || {};
      expect(errors['required']).toBeTruthy;
    });

    it('Release Date',()=>{
      let release=component.addMovieForm.controls['releaseDate'];
      expect(release.valid).toBeFalsy();
    });

    it('Description valid',()=>{
      let errors={};
      let description=component.addMovieForm.controls.description;
      description.setValue("This is one of the best Indian movies, released in the 2014.");
      errors=description.errors || {};
      expect(errors['required']).toBeTruthy;
      expect(errors['minLength']).toBeTruthy;
      expect(errors['maxLength']).toBeTruthy;
    });


    


    it('Description valid',()=>{
      let errors={};
      let description=component.addMovieForm.controls.description;
      description.setValue("This is on");
      errors=description.errors || {};
      expect(errors['required']).toBeTruthy;
      expect(errors['minLength']).toBeFalsy;
      expect(errors['maxLength']).toBeTruthy;
    });


    it('Description valid',()=>{
      let errors={};
      let description=component.addMovieForm.controls.description;
      description.setValue("This is on dfhdfhdjfidjfdijfldjfdskjfkkkkkdfhiusfhjdshfjdghfjdgfjbdsjhgcbzsnbdcbsguydhbst dshgfjsdbfjdshfsdm  hfjsdfg      fyfuhsufhdsjfjdfjddfgujjdgfjdfgdjdfbjdgfjhdfbfhdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      errors=description.errors || {};
      expect(errors['required']).toBeTruthy;
      expect(errors['minLength']).toBeTruthy;
      expect(errors['maxLength']).toBeFalsy;
    });

    it('Description',()=>{
      let desc=component.addMovieForm.controls['description'];
      expect(desc.valid).toBeFalsy();
    });

    it('VideoUrl valid',()=>{
      let errors={};
      let video=component.addMovieForm.controls.videoUrl;
      video.setValue("https://www.amazon.com/pictures");
      errors=video.errors || {};
      expect(errors['required']).toBeTruthy;
      expect(errors['pattern']).toBeTruthy;
    });

    it('VideoUrl valid',()=>{
      let errors={};
      let video=component.addMovieForm.controls.videoUrl;
      video.setValue("amazon.com/pictures");
      errors=video.errors || {};
      expect(errors['required']).toBeTruthy;
      expect(errors['pattern']).toBeFalsy;
    });



    it('Video Url',()=>{
      let video=component.addMovieForm.controls['videoUrl'];
      expect(video.valid).toBeFalsy();
    });

    it('Category valid',()=>{
      let errors={};
      let category=component.addMovieForm.controls.category;
      category.setValue("Romance");
      errors=category.errors || {};
      expect(errors['required']).toBeTruthy;
    });

    it('Category Url',()=>{
      let category=component.addMovieForm.controls['category'];
      expect(category.valid).toBeFalsy();
    });


    it('Agelimit valid',()=>{
      let errors={};
      let age=component.addMovieForm.controls.ageLimit;
      age.setValue(18);
      errors=age.errors || {};
      expect(errors['required']).toBeTruthy;

    });


    it('Age limit',()=>{
      let age=component.addMovieForm.controls['ageLimit'];
      expect(age.valid).toBeFalsy();
    });

    it('Language valid',()=>{
      let errors={};
      let lang=component.addMovieForm.controls.language;
      lang.setValue("English");
      errors=lang.errors || {};
      expect(errors['required']).toBeTruthy;
    });

    it('Age limit',()=>{
      let lang=component.addMovieForm.controls['language'];
      expect(lang.valid).toBeFalsy();
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
      saveMovie1(movie:Movie) {
          return of(movieList[0]);
      }

    }


    it('should Save Movie', ()=>{
      expect(adminServiceStub.saveMovie1(movieList[0])).toBeTruthy;
      expect(component.saveData()).toBe(1);
    })
    
});
