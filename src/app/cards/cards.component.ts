import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Movie } from '../movie';
import { MovieserviceService } from '../movieservice.service';
import { Playlist } from '../playlist';
import { Playlistitem } from '../playlistitem';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
     
  myStyle: object = {};
  myParams: object = {};
  width:  100;
  height:  100;
  myPlayList : Playlist[];
  selectedPlayListId:number;
  myplayListItemsObj = new Playlistitem();

  @Input() resultMovie : Movie;
  constructor(private service: MovieserviceService, public snackBar: MatSnackBar) { 
    $('.flip').hover(function() {
      $(this).find('.card').toggleClass('flipped');

      $('.flipcard').click(function (e) {
        var $card = $(this);
        if ($card.hasClass("flipped")) {
            $card.removeClass('flipped');
        } else {
            $card.addClass('flipped');
        }
    });

});
}

  ngOnInit() {


  }

  
  addToFav(movie){
    this.service.addfavMovie(movie).subscribe(data=>{
      this.openSnackBar("Added", "Okay");
    })
  }
  

  shortDesc(desc){
    return desc.substring(0,100) + '...';
  }
  

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }
}
