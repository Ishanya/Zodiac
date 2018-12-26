import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Movie } from '../movie';
import { MovieserviceService } from '../movieservice.service';


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

  @Input() resultMovie : Movie;
  constructor(private service: MovieserviceService) { 
    $('.flip').hover(function() {
      $(this).find('.card').toggleClass('flipped');

});
  }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };
        this.myParams = {
          particles: {
              number: {
                  value: 200,
              },
              color: {
                  value: '#ff0000'
              },
              shape: {
                  type: 'triangle',
              },

      }
      };
  }
  addToFav(movie){
    this.service.addfavMovie(movie).subscribe(data=>{
      alert('Added');
    });
    return 1;
  }
}
