import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admin-add-movie',
  templateUrl: './admin-add-movie.component.html',
  styleUrls: ['./admin-add-movie.component.css']
})
export class AdminAddMovieComponent implements OnInit {
  movie = new Movie();
  movieNew= new Movie();
  addMovieForm :FormGroup;
  
 
   constructor(private router: Router, private  formBuilder: FormBuilder, 
    private service: AdminserviceService) {
    
     //this.saveData();
    }
 
   ngOnInit() {
 
     this.addMovieForm =this.formBuilder.group({
     movieName :['',[Validators.required, Validators.minLength(3)]],
     posterUrl:['',[Validators.required, Validators.pattern('https://.*')]],
     releaseDate : ['',[Validators.required]],
     description: ['',[Validators.required, Validators.minLength(20), Validators.maxLength(150)]],
     videoUrl: ['',[Validators.required, Validators.pattern('https://.*')]],
     category : ['',[Validators.required]],
     ageLimit :['',[Validators.required]],
     language :['',[Validators.required]]
 
     });
   }
 
   onSubmit(){
 
   }
   saveData(){

    // this.movie.movieName = this.addMovieForm.value.movieName;
    // this.movie.moviePosterUrl = this.addMovieForm.value.posterUrl;
    // this.movie.movieReleaseDate = this.addMovieForm.value.releaseDate;
    // this.movie.movieDescription = this.addMovieForm.value.description;
    // this.movie.movieVideoUrl = this.addMovieForm.value.videoUrl;
    // this.movie.movieCategory = this.addMovieForm.value.category;
    // this.movie.movieLanguage = this.addMovieForm.value.language;
    // this.movie.movieAgeLimit = this.addMovieForm.value.ageLimit;
    
    this.movie.movieName = 'xyx';
    this.movie.moviePosterUrl = 'xyx';
    this.movie.movieReleaseDate = '1997-02-19'
    this.movie.movieDescription = 'xyx';
    this.movie.movieVideoUrl = 'xyx';
    this.movie.movieCategory = 'xyx';
    this.movie.movieLanguage = 'xyx';
    this.movie.movieAgeLimit = 20
     console.log(this.movie);
     this.service.saveMovie1(this.movie)
     .subscribe(data => {
        this.movieNew=data;
     });
     return 1;
   }
 }