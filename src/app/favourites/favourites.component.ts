import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Favourites } from '../favourites';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  data = ["1","2","3","4","5","6","7","8"];
  fav: Favourites[];
  constructor(private service : MovieserviceService) { }

  ngOnInit() {
    this.getAllFav();
  }
  
  getAllFav(){
    this.service.getFavList().subscribe(data=>{
      this.fav = data;
      this.filterFav();
    });
    return 1;
  }

   filterFav(){
     this.fav = this.fav;
   }

   deleteFav(favr){
     this.service.requestFavouriteDelete(favr).subscribe(data=>{
       if(data.movieId==favr.movieId){
         this.getAllFav();
       }
     });
     return 1;
   }
}
