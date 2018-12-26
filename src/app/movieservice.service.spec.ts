import { TestBed } from '@angular/core/testing';

import { MovieserviceService } from './movieservice.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Movie } from './movie';
import { Favourites } from './favourites';
import { Hist } from './history';
import { doesNotThrow } from 'assert';

describe('MovieserviceService', () => {
  let service:MovieserviceService;
  let httpMock:HttpTestingController;
  beforeEach(() =>{ TestBed.configureTestingModule({
    providers:[MovieserviceService],
    imports:[HttpClientTestingModule]
  }),
  service=TestBed.get(MovieserviceService);
  httpMock=TestBed.get(HttpTestingController);
});
 
afterEach(()=>{
  httpMock.verify();
});

  it('should be created', () => {
    const service: MovieserviceService = TestBed.get(MovieserviceService);
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

  const historyList:Hist[]=[{
      searchId:1,
      userId:"Is1234",
      movieId:1,
      searchTime:"12:12:12",

  }];

  it('request movies from servive',()=>{


    
      service.getMovies("kal").subscribe(data=>{
       expect( data.length).toBe(1);
       expect(data).toEqual(movieList);
      });


      
     
    
    const request=httpMock.expectOne(`${service.baseUrl1}/search-movies/searches/title/kal`);
    expect(request.request.method).toBe('GET');
    request.flush(movieList);
    
    });

    it('request movies List REPEAT from servive ',()=>{


    
      service.requestMovieList("kal").subscribe(data=>{
       expect( data.length).toBe(1);
       expect(data).toEqual(movieList);
      });
     
    
    const request=httpMock.expectOne(`${service.baseUrl1}/search-movies/searches/title/kal`);
    expect(request.request.method).toBe('GET');
    request.flush(movieList);
    
    });


    
it('request FAVOURITE movies from servive',()=>{

    service.getFavList().subscribe(data=>{
     expect( data.length).toBe(1);
     expect(data).toEqual(FavmovieList);
    });
   
  
  const request=httpMock.expectOne(`${service.baseUrl1}/favourite-movies/favourite`);
  expect(request.request.method).toBe('GET');
  request.flush(FavmovieList);
  
  });

  it('request FAVOURITE movies from servive REPEAT',()=>{

    service.requestFavMovieList().subscribe(data=>{
     expect( data.length).toBe(1);
     expect(data).toEqual(FavmovieList);
    });
   
  
  const request=httpMock.expectOne(`${service.baseUrl1}/favourite-movies/favourite`);
  expect(request.request.method).toBe('GET');
  request.flush(FavmovieList);
  
  });
    

    
  it('ADD FAVOURITE movies from servive',()=>{
    
      service.addfavMovie(movieList[0]).subscribe(data=>{
       expect(data[0].movieId).toBe(1);
       
      });
     
    
    const request=httpMock.expectOne(`${service.baseUrl1}/favourite-movies/favAdd/1`);
    expect(request.request.method).toBe('POST');
    request.flush(movieList[0]);
    
    });


    it('request deletion of FAVOURITE movies from servive',(done)=>{

     
        service.requestFavouriteDelete(FavmovieList[0]).subscribe(data=>{
         expect(data[0].movieId).toBe(1);
         done();
        });
     
      const request=httpMock.expectOne(`${service.baseUrl1}/favourite-movies/favDelete/1`);
      expect(request.request.method).toBe('PUT');
      request.flush(FavmovieList[0]);
     
      });

      it('request add SEARCH from servive',(done)=>{

     
        service.addSearch(movieList[0]).subscribe(data=>{
         expect(data[0].movieId).toEqual(1);
         done();
        });
     
      const request=httpMock.expectOne(`${service.baseUrl1}/search-movies/addSearch`);
      expect(request.request.method).toBe('POST');
      request.flush(movieList);
     
      });

       it('request  SEARCH history of today from servive',()=>{

     
         service.getMySearchHistoryOfToday().subscribe(data=>{
          expect(data[0].movieId).toBe(1);
         });

       
     
       const request=httpMock.expectOne(`${service.baseUrl1}/search-movies/viewByDateAndUserId/2018-12-10/1`);
       expect(request.request.method).toBe('GET');
       request.flush(movieList);
     
       });

       it('request my SEARCH history  from servive',()=>{

     
        service.getMySearchHistory().subscribe(data=>{
         expect(data[0].movieId).toEqual(1);
        });
    
      const request=httpMock.expectOne(`${service.baseUrl1}/search-movies/viewByUserId/1`);
      expect(request.request.method).toBe('GET');
      request.flush(movieList);
    
      });

      it('request movie by id from servive',()=>{

     
        service.getMovieById(1).subscribe(data=>{
         expect(data[0].movieId).toEqual(1);
        });
    
      const request=httpMock.expectOne(`${service.baseUrl1}/administrator/viewMovie/1`);
      expect(request.request.method).toBe('GET');
      request.flush(movieList);
    
      });
    
      it('request clear HISTORY  from servive',()=>{

     
        service.clearOneHistory(1).subscribe(data=>{
         expect(data[0].movieId).toEqual(1);
        });
    
      const request=httpMock.expectOne(`${service.baseUrl1}/search-movies/deleteSearch/1`);
      expect(request.request.method).toBe('POST');
      request.flush(movieList);
    
      });


});
