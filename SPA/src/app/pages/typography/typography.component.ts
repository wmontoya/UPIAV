import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent{

    public canvas : any;
    public ctx;
    public chartColor;
    public chartEmail;
    public chartHours;
  
      ngOnInit(){
        this.chartColor = "#FFFFFF";
  
    

  
        var speedCanvas = document.getElementById("speedChart");
  
        var dataFirst = {
          data: [0, 19, 15, 20, 30, 40, 37, 15],
          fill: false,
          borderColor: '#51CACF',
          backgroundColor: 'transparent',
          pointBorderColor: '#51CACF',
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
        };
  
      
  
        var speedData = {
          labels: ["Juan", "Enerto", "Victor", "Adrian", "Carlos", "Elena", "Luis", "Rosa"],
          datasets: [dataFirst]
        };
  
        var chartOptions = {
          legend: {
            display: false,
            position: 'top'
          }
        };
  
        var lineChart = new Chart(speedCanvas, {
          type: 'line',
          hover: false,
          data: speedData,
          options: chartOptions
        });
      }
  }