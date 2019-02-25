import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHAR_SAMPLE_DATA: any[] =
  [
    { data: [124, 541, 584, 685, 98, 41], label: 'Market Reserach' },
    { data: [174, 51, 594, 65, 98, 81], label: 'Volume' },
    { data: [144, 591, 54, 6095, 98, 41], label: 'Future' },
  ]

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }


  lineChartData = LINE_CHAR_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };

  lineChartLegend: true;
  lineChartType = 'line';
  linechartColors = LINE_CHART_COLORS;
  ngOnInit() {
  }

}
