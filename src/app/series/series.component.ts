import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SeriesService } from './Series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public series: Array<Serie> = [];
  public avg: number = 0;

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
  }

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      this.avg = this.getAvg();
    });
  }

  getAvg(): number {
    let totSeasons: number = 0;
    let totSeries: number = this.series.length;
    this.series.forEach((serie) => totSeasons += serie.seasons);
    let avg: number = totSeasons/totSeries;
    return avg;
  }

}
