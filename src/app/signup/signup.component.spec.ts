import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSlideToggleModule, MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AppComponent } from '../app.component';
import { AdminAddMovieComponent } from '../admin-add-movie/admin-add-movie.component';
import { AdminEditMovieComponent } from '../admin-edit-movie/admin-edit-movie.component';
import { AdminViewMovieComponent } from '../admin-view-movie/admin-view-movie.component';
import { MovieHeaderComponent } from '../movie-header/movie-header.component';
import { MovieFooterComponent } from '../movie-footer/movie-footer.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HomeComponent } from '../home/home.component';
import { HomeFooterComponent } from '../home-footer/home-footer.component';
import { HomeNavbarComponent } from '../home-navbar/home-navbar.component';
import { CardsComponent } from '../cards/cards.component';
import { FavouritesComponent } from '../favourites/favourites.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { LoginComponent } from '../login/login.component';
import { SearchHistoryComponent } from '../search-history/search-history.component';
import { APP_BASE_HREF } from '@angular/common';
import { of } from 'rxjs';
import { Profile } from '../profile';






describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,
        AdminHomeComponent,
        AdminAddMovieComponent,
        AdminEditMovieComponent,
        AdminViewMovieComponent,
        MovieHeaderComponent,
        MovieFooterComponent,
        WelcomeComponent,
        HomeComponent,
        HomeFooterComponent,
        HomeNavbarComponent,
        CardsComponent,
        FavouritesComponent,
        MovieCardComponent,
        LoginComponent,
        SignupComponent,
        SearchHistoryComponent ],
      imports:[
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
       AppRoutingModule,
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
      providers:[{provide:APP_BASE_HREF,useValue:'/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
it('form valid',()=>{
expect(component.registerForm.valid).toBeFalsy;
});

it('firstname valid',()=>{
  let errors={};
  let fname=component.registerForm.controls.firstName;
  fname.setValue("Ishanya");
  errors=fname.errors || {};
  expect(errors['required']).toBeTruthy;
});

it('first name ',()=>{
  let firstname=component.registerForm.controls['firstName'];
  expect(firstname.valid).toBeFalsy();
});


it('lastname valid',()=>{
  let errors={};
  let lname=component.registerForm.controls.lastName;
  lname.setValue("Mittal");
  errors=lname.errors || {};
  expect(errors['required']).toBeTruthy;
});

it('Last name ',()=>{
  let lastname=component.registerForm.controls['lastName'];
  expect(lastname.valid).toBeFalsy();
});


it('DOB valid',()=>{
  let errors={};
  let dating=component.registerForm.controls.dob;
  dating.setValue("2018-12-12");
  errors=dating.errors || {};
  expect(errors['required']).toBeTruthy;
});

it('DOB ',()=>{
  let dating=component.registerForm.controls['dob'];
  expect(dating.valid).toBeFalsy();
});


it('email valid',()=>{
  let errors={};
  let mailid=component.registerForm.controls.email;
  mailid.setValue("ishanya@gmail.com");
  errors=mailid.errors || {};
  expect(errors['required']).toBeTruthy;
});

it('email valid pattern',()=>{
  let errors={};
  let mailid=component.registerForm.controls.email;
  mailid.setValue("ishanya@gmail.com");
  errors=mailid.errors || {};
  expect(errors['pattern']).toBeTruthy;
});

it('email valid pattern',()=>{
  let errors={};
  let mailid=component.registerForm.controls.email;
  mailid.setValue("ishanya.com");
  errors=mailid.errors || {};
  expect(errors['pattern']).toBeFalsy;
});



it('email name ',()=>{
  let mailid=component.registerForm.controls['email'];
  expect(mailid.valid).toBeFalsy();
});

it('gender name ',()=>{
  let gender=component.registerForm.controls['gender'];
  expect(gender.valid).toBeTruthy();
});

it('gender check',()=>{
  let gender=component.updateGender(1);
  expect(gender).toBe('male');
});


it('pincode valid ',()=>{
  let errors={};
  let pin=component.registerForm.controls.pincode;
  expect(pin.valid).toBeFalsy();
  pin.setValue("123456");
  errors=pin.errors || {};
  expect(errors['required']).toBeTruthy;
  expect(errors['minLength']).toBeTruthy;
  expect(errors['maxLength']).toBeTruthy;
});

it('pincode valid ',()=>{
  let errors={};
  let pin=component.registerForm.controls.pincode;
  expect(pin.valid).toBeFalsy();
  pin.setValue("1234");
  errors=pin.errors || {};
  expect(errors['required']).toBeTruthy;
  expect(errors['minLength']).toBeFalsy;
  expect(errors['maxLength']).toBeFalsy;
});

it('mobile valid ',()=>{
  let errors={};
  let mobile=component.registerForm.controls.mobile;
  expect(mobile.valid).toBeFalsy();
  mobile.setValue("9878878767");
  errors=mobile.errors || {};
  expect(errors['required']).toBeTruthy;
  expect(errors['pattern']).toBeTruthy;
});

it('mobile valid ',()=>{
  let errors={};
  let mobile=component.registerForm.controls.mobile;
  expect(mobile.valid).toBeFalsy();
  mobile.setValue("458878767");
  errors=mobile.errors || {};
  expect(errors['required']).toBeTruthy;
  expect(errors['pattern']).toBeFalsy;
});

it('password valid ',()=>{
  let errors={};
  let pass=component.registerForm.controls.password;
  expect(pass.valid).toBeFalsy();
  pass.setValue("Mittal@345");
  errors=pass.errors || {};
  expect(errors['required']).toBeTruthy;
  expect(errors['minLength']).toBeTruthy;
  expect(errors['pattern']).toBeTruthy;
});

it('password valid ',()=>{
  let errors={};
  let pass=component.registerForm.controls.password;
  expect(pass.valid).toBeFalsy();
  pass.setValue("Mitt");
  errors=pass.errors || {};
  expect(errors['required']).toBeTruthy;
  expect(errors['minLength']).toBeFalsy;
  expect(errors['pattern']).toBeFalsy;
});

it('question valid ',()=>{
  let errors={};
  let ques=component.registerForm.controls.question;
  expect(ques.valid).toBeFalsy();
  ques.setValue("ur fav book");
  errors=ques.errors || {};
  expect(errors['required']).toBeTruthy;
  
});



it('answer valid ',()=>{
  let errors={};
  let ans=component.registerForm.controls.answer;
  expect(ans.valid).toBeFalsy();
  ans.setValue("Harry Potter");
  errors=ans.errors || {};
  expect(errors['required']).toBeTruthy;
  expect(errors['minLength']).toBeTruthy;
  
});


it('answer valid ',()=>{
  let errors={};
  let ans=component.registerForm.controls.answer;
  expect(ans.valid).toBeFalsy();
  ans.setValue("");
  errors=ans.errors || {};
  expect(errors['required']).toBeTruthy;
  expect(errors['minLength']).toBeFalsy;
  
});

it("form validity function",()=>{
  let rel=component.isValidForm();
  expect(rel).toBeTruthy;
});

 it("updating gender",()=>{
  
     expect( component.updateGender(1)).toBe('male');
     expect( component.updateGender(2)).toBe('female');
     expect( component.updateGender(3)).toBe('other');
 });

let dateString =  "2015-12-12" 
let newDate = new Date(dateString);

const profile:Profile[]=[{

  userId:"Ti1234",
  firstName :"Ishanya",
lastName:"Mittal",
  dateOfBirth: this.dateString,
gender: "male",
age:18,
state: "Rajasthan",
pincode :"121223",
mobileNo:"7876765654",
emailID: "mittal.ishan@gmail.com",
password: "Ishanya@123",
authQuestion :"book",
authAnswer:"harry"

}]

const userServiceStub = {
  registration(profile){
       return of(profile);
   }
 }

it("registering",()=>{
  let fname=component.registerForm.controls.firstName;
  let lname=component.registerForm.controls.lastName;
 
  let pass=component.registerForm.controls.password;
  let gen=component.registerForm.controls.gender;
  let dstart=component.registerForm.controls.dob;
  let mail=component.registerForm.controls.email;
  let pin=component.registerForm.controls.pincode;
  let mobile=component.registerForm.controls.mobile;
  let ques=component.registerForm.controls.question;
  let ans=component.registerForm.controls.answer;
  fname.setValue("Ishanya");
  lname.setValue("Mittal");
gen.setValue("male");
dstart.setValue("2015-12-12");
mail.setValue("mittal.ishan@gmail.com");
  pass.setValue("Ishanya@123");
  pin.setValue("121223");
  mobile.setValue("7876765654");
  ques.setValue("book");
  ans.setValue("harry");
  expect(userServiceStub.registration(profile)).toBeTruthy;
  expect(component.register()).toBe(1);
});

it("gender check",()=>{
  expect(component.isGender()).toBeTruthy;
})


});