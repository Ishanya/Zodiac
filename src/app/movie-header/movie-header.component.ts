import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css']
})
export class MovieHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    return true;
}
closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    return true;
}

}
