import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

import { ReportserviceService } from '../reportservice.service';
import { UserserviceService } from '../userservice.service';
import { MovieUserView } from '../movie-user-view';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-weekly-user-report',
  templateUrl: './weekly-user-report.component.html',
  styleUrls: ['./weekly-user-report.component.css']
})
export class WeeklyUserReportComponent implements OnInit {

  displayedColumns: string[] = ['movieId','movieName','userName', 'gender','age','pincode'];
  dataSource : MovieUserView[];
  movieUserView : MovieUserView[];
  constructor(private service : ReportserviceService, 
    private userService: UserserviceService,
    private movieService: MovieserviceService) { }

  ngOnInit() {
    this.service.getCity().subscribe(data=>{
      console.log(data);
    })
    this.service.getMovieUserView().subscribe(data=>{
      this.movieUserView = data;
      this.getOtherDetails();
      this.dataSource = this.movieUserView;
      console.log(this.dataSource);
    })
  }
  getOtherDetails(){
    for(let i = 0 ;i<this.movieUserView.length;i++){
      this.movieService.getMovieById(this.movieUserView[i].movieId).subscribe(data=>{
        this.movieUserView[i].movieName = data.movieName;
      })
      this.userService.getUserDetails(this.movieUserView[i].userId).subscribe(data=>{
        this.movieUserView[i].userName = data.firstName;
        this.movieUserView[i].dateOfBirth = data.dateOfBirth;
        this.movieUserView[i].gender = data.gender;
        this.movieUserView[i].pincode = data.pincode;
      })
   }
  }
  exportAsXLSX():void {
    this.service.exportAsExcelFile(this.movieUserView,'name');
    //this.service.exportAsExcelFile(ELEMENT_DATA, 'sample');
 }
 exportAsPDF():void{
  var columns = ["Movie ID", "Movie Name", "User name","Gender", "pincode"];

var rows = [

];

for(let i = 0 ;i<this.movieUserView.length;i++){

  let x = [];

   x[0] = this.movieUserView[i].movieId;
   x[1] = this.movieUserView[i].movieName;
   x[2] = this.movieUserView[i].userName;
   x[3] = this.movieUserView[i].gender;
   x[4] = this.movieUserView[i].pincode;
  rows.push(x);

}console.log(rows);
var doc = new jsPDF('p', 'pt');
doc.autoTable(columns, rows);
doc.save('WeeklyUserReport.pdf');

 }
}
