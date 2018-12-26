import { TestBed } from '@angular/core/testing';

import { AdminserviceService } from './adminservice.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Movie } from './movie';

describe('AdminserviceService', () => {
  let service:AdminserviceService;
  let httpMock:HttpTestingController;
  beforeEach(() => {TestBed.configureTestingModule({

    providers:[AdminserviceService],
    imports:[HttpClientTestingModule]
  }),
  service=TestBed.get(AdminserviceService);
  httpMock=TestBed.get(HttpTestingController);
});

afterEach(()=>{
  httpMock.verify();
});

  it('should be created', () => {
    const service: AdminserviceService = TestBed.get(AdminserviceService);
    expect(service).toBeTruthy();
  });

  const movieList:Movie[]=[{
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

  it('save movies from servive',()=>{
    service.saveMovie1(movieList).subscribe(data=>{
     expect( data[0].movieId).toBe(1);
    
    });
  const request=httpMock.expectOne(`${service.baseUrl1}/administrator/addMovie`);
  expect(request.request.method).toBe('POST');
  request.flush(movieList);
  
  });

  it('edit movies from servive',()=>{
    service.editMovie(movieList).subscribe(data=>{
     expect( data[0].movieId).toBe(1);
    
    });
  const request=httpMock.expectOne(`${service.baseUrl1}/administrator/editMovie`);
  expect(request.request.method).toBe('POST');
  request.flush(movieList);
  
  });

  it('get all movies from servive',()=>{
    service.getAllMovie().subscribe(data=>{
     expect( data.length).toBe(1);
    
    });
  const request=httpMock.expectOne(`${service.baseUrl1}/administrator/getAllMovie`);
  expect(request.request.method).toBe('GET');
  request.flush(movieList);
  
  });

  it('delete movies from servive',()=>{
    service.deleteMovie(movieList[0].movieId).subscribe(data=>{
     expect( data[0].movieId).toBe(1);
    
    });
  const request=httpMock.expectOne(`${service.baseUrl1}/administrator/deleteMovie/1`);
  expect(request.request.method).toBe('POST');
  request.flush(movieList);
  
  });


});
