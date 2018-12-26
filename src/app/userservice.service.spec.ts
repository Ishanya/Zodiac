import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { UserserviceService } from './userservice.service';
import { Profile } from './profile';
import { Credentials } from './credentials';


describe('UserserviceService', () => {
  let service:UserserviceService;
  let httpMock: HttpTestingController;
  beforeEach(() => {TestBed.configureTestingModule({
    providers:[UserserviceService],
    imports:[HttpClientTestingModule]
  }),
  service=TestBed.get(UserserviceService);
  httpMock=TestBed.get(HttpTestingController);
});


afterEach(()=>{
  httpMock.verify();
});

  it('should be created', () => {
    const service: UserserviceService = TestBed.get(UserserviceService);
    
    expect(service).toBeTruthy();
  });

  const profileList:Profile[]=[{
    userId:"Ra1234",
    firstName :"Rashi",
	lastName:"Yadav",
  dateOfBirth: new Date(1997,12,12),
	gender:"female",
	age:20,
	state: "Haryana",
	pincode :"123401",
	mobileNo:"87456352489",
	emailID: "rashi12@gmail.com",
	password: "rashi@123",
	authQuestion: "What is your favorite color?",
	authAnswer:"Red"
	}];

  const credentials:Credentials[]=[{
    userID: "Ra1234",
    password: "rashi@123",
    loginStatus:0,
    authQuestion:"What is your favorite color?",
    authAnswer: "Red",
    userType: "User",
	emailID: "rashi12@gmail.com",
	mobileNo: "8745635248"
  }];



  it('Post user credentials from service',()=>{
    
    service.UserLogin(credentials).subscribe(data=>{
     expect(data.userID).toBe('Ra1234');
     expect(data).toEqual(credentials[0]);
    });
   
  
  const request=httpMock.expectOne(`${service.baseUrl1}/login-signup-movies/login`);
  expect(request.request.method).toBe('POST');
  request.flush(credentials[0]);
  
  });


  it('Post user profile from service', ()=>{

    service.registration(profileList).subscribe(data=>{
      expect(data.userId).toBe('Ra1234');
      expect(data).toEqual(profileList[0]);
    });

    const request=httpMock.expectOne(`${service.baseUrl1}/login-signup-movies/register`);
    expect(request.request.method).toBe('POST');
    request.flush(profileList[0]);
  });


  it('Post user credentials for forgot password',()=>{

    service.forgotPassword(credentials).subscribe(data=>{
      expect(data.userID).toBe('Ra1234');
      expect(data).toEqual(credentials[0]);
    });

    const request=httpMock.expectOne(`${service.baseUrl1}/login-signup-movies/forgotPassword`);
    expect(request.request.method).toBe('POST');
    request.flush(credentials[0]);
  });



  it('request user credentials by id from service',()=>{

    service.UserLogout("Ra1234").subscribe(data=>{
      expect(data[0].userID).toBe('Ra1234');

    });

    const request=httpMock.expectOne(`${service.baseUrl1}/login-signup-movies/Ra1234`);
    expect(request.request.method).toBe('GET');
    request.flush(credentials);
  });
});
