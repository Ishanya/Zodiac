import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

const EXCEL_EXTENSION = '.xlsx';

//var doc = new jsPDF('p', 'pt');

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  ngOnInit() {
  }
  constructor(){
  
}

exportpdf(){
  alert("rashi");
var columns = ["ID", "Name", "Country"];
var rows = [
    [1, "Shaw", "Tanzania"],
    [2, "Nelson", "Kazakhstan"],
    [3, "Garcia", "Madagascar"]
];
var doc = new jsPDF('p', 'pt');
  doc.autoTable(columns, rows, {
      styles: {fillColor: [100, 255, 255]},
      columnStyles: {
        id: {fillColor: 255}
      },
      margin: {top: 60},
      addPageContent: function(data) {
        doc.text("Header", 40, 30);
      }
  });
  alert("rashi2");
  doc.save('table.pdf');
}
  

  exportAsXLSX():void {
    //this.exportAsExcelFile(this.data, 'sample');
 }

  
}
