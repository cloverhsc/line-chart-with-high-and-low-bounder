import { Component } from '@angular/core';
import * as c3 from 'c3';
import { faker } from '@faker-js/faker';

interface LineData {
  name: string;
  data: number[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  chart: null | c3.ChartAPI = null;

  ngOnInit(): void {

    const lineData = this.generateLineData(12);

    this.chart = c3.generate({
      bindto: '#line-chart',
      data: {
        columns: lineData,
      },
      grid: {
        y: {
          lines: [
            { value: 25, text: 'LowBound', class: 'LowBound', position: 'start' },
            { value: 90, text: 'HighBound', class: 'HighBound', position: 'start' }
          ]
        }
      }
    });
  }


  generateLineData(numOfLine: number): Array<any> {
    const lineData: Array<any> = [];


    for (let lineIndex = 0; lineIndex < numOfLine; lineIndex++) {
      let line = [];
      const dataName = faker.internet.userName();
      line.push(dataName);

      for (let dataIndex = 0; dataIndex < 10; dataIndex++) {
        line.push(Math.floor(Math.random() * 100));
      }
      lineData.push(line);
    }

    return lineData;
  }
}

