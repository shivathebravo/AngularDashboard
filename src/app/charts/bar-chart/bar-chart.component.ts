import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA:any[]=[
  
  {data:[10,35,50,15,64],label:'Q3 Sales'},
  {data:[10,35,100,150,300],label:'Q4 Sales'}
]

 const SAMPLE_BARCHART_LABELS: string[]=['w1','w2','w3','w4','w5'];


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData:any[]=SAMPLE_BARCHART_DATA;
  public barChartLabels:string[]=SAMPLE_BARCHART_LABELS;
  public barChartType='bar';
  public barChartLegend=true;
  public barChartOptions:any={
    scaleShowVerticalLines:false,
    responsive:true
  };

  ngOnInit() {

  }

}
