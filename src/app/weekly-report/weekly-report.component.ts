import { Component, OnInit } from '@angular/core';
import { ReportserviceService } from '../reportservice.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { MovieView } from '../movie-view';
import { MovieserviceService } from '../movieservice.service';


@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.component.html',
  styleUrls: ['./weekly-report.component.css']
})
export class WeeklyReportComponent implements OnInit {
  displayedColumns: string[] = ['movieId','movieName','movieReleaseYear', 'movieViews'];
  dataSource : MovieView[];
  movieView : MovieView[];
  constructor(private service : ReportserviceService,private movieService : MovieserviceService) { }

  ngOnInit() {

    this.service.getMovieView().subscribe(data=>{
      this.movieView= data;
      this.getMovieDetails();
      this.dataSource = this.movieView;
      console.log(this.dataSource);
    })
  }
  getMovieDetails(){
      for(let i = 0 ;i<this.movieView.length;i++){
         this.movieService.getMovieById(this.movieView[i].movieId).subscribe(data=>{
           this.movieView[i].movieName = data.movieName;
           this.movieView[i].movieReleaseDate = data.movieReleaseDate;
         })
      }
  }
  exportAsXLSX():void {
    this.service.exportAsExcelFile(this.movieView,'name');
    //this.service.exportAsExcelFile(ELEMENT_DATA, 'sample');
 }
 exportAsPDF():void{
    var columns = ["Movie ID", "Movie Name", "Movie Release Date","Movie View"];

    var rows = [
    
    ];
    
    for(let i = 0 ;i<this.movieView.length;i++){
        let x=[];
    x[0] = this.movieView[i].movieId;
    x[1] = this.movieView[i].movieName;
     x[2] = this.movieView[i].movieReleaseDate;
    x[3] = this.movieView[i].movieViews;
    rows.push(x);
    
    }
    console.log(rows);
    var doc = new jsPDF('p', 'pt');
    doc.autoTable(columns, rows);
    doc.save('WeeklyReport.pdf');
    
   
 }
}

