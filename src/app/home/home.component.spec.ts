import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import * as c3 from 'c3';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate line data with the correct number of data points per line', () => {
    const numOfLine = 5;
    const lineData = component.generateLineData(numOfLine);
    const numDataPoints = lineData[0].length - 1; // Subtract 1 for the username
    expect(numDataPoints).toEqual(10);
  });

  it('should generate line data with unique usernames', () => {
    const numOfLine = 5;
    const lineData = component.generateLineData(numOfLine);
    const usernames = lineData.map(line => line[0]); // Get the usernames from each line
    const uniqueUsernames = new Set(usernames); // Convert to a set to remove duplicates
    expect(uniqueUsernames.size).toEqual(numOfLine);
  });

  it('should generate a chart with the correct number of lines', () => {
    const numOfLine = 12;
    component.ngOnInit();
    const chartData = component.chart?.data();
    expect(chartData?.length).toEqual(numOfLine);
  });

  it('should generate a chart with the correct number of data points per line', () => {
    const numOfLine = 5;
    component.ngOnInit();
    const chartData = component.chart?.data();
    const numDataPoints = chartData?.[0].values.length;
    expect(numDataPoints).toEqual(10);
  });
});
