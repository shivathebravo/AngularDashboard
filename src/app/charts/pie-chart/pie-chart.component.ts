import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData: number[] = [350, 700, 1120];
  pieChartLabels: string[] = ['XYZ Log', 'ABC company', 'RaraTech'];
  colors: any[] = [
    {
      backgroundColor: ['#26765c', '#ff6bbc', '#ffd166']
    }
  ]
pieChartType = 'pie'
ngOnInit() {
}

}
