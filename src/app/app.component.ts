import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgChartsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tes';
  
  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 300, 500, 100, 40, 120 ] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };

  constructor() {
  }

}