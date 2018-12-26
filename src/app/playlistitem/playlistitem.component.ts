import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { Playlist } from '../playlist';
import { Playlistitem } from '../playlistitem';
import { MovieserviceService } from '../movieservice.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-playlistitem',
  templateUrl: './playlistitem.component.html',
  styleUrls: ['./playlistitem.component.css']
})
export class PlaylistitemComponent implements OnInit {

  constructor(private service: MovieserviceService, public snackBar: MatSnackBar) { }

  @Input() resultMovie : Movie;
  myPlayList : Playlist[];
  selectedPlayListId:number;
  myplayListItemsObj = new Playlistitem();
  myStyle: object = {};
  myParams: object = {};
  width:  100;
  height:  100;
  ngOnInit() {

    this.service.getPlayList().subscribe(data=>{
      this.myPlayList = data;
    })
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

  addPlayList(){
    console.log(this.resultMovie);
    this.myplayListItemsObj.movieId = this.resultMovie.movieId;
    this.myplayListItemsObj.playListId = this.selectedPlayListId;
    this.service.addToMyPlayListItems(this.myplayListItemsObj).subscribe(data=>{
      console.log(data);
      this.openSnackBar("Added", "Okay");
     
    })
    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }

}
