import { Component, OnInit, Renderer2 } from '@angular/core';
import { Person } from 'src/interface/person';

@Component({
  selector: 'app-dashborad-dpa',
  templateUrl: './dashborad-dpa.component.html',
  styleUrls: ['./dashborad-dpa.component.css']
})
export class DashboradDPAComponent implements OnInit {

  person: Person[] = [];

  cols!: any[];

  data: any;
  options: any;

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background', 'rgb(8,116,194)');
    this.renderer.setStyle(document.body, 'background', 'linear-gradient(180deg, rgba(8,116,194,1) 24%, rgba(192,208,235,1) 100%)');
  }

  ngOnInit(): void {
    this.person = [
      {extNo: '1001', agentName:'Thanaporn', totCalls: 43, time:'00:13:25', status: 'On Calls'},
      {extNo: '1001', agentName:'Thanaporn', totCalls: 43, time:'00:13:25', status: 'On Calls'},
      {extNo: '1001', agentName:'Thanaporn', totCalls: 43, time:'00:13:25', status: 'On Calls'},
      {extNo: '1001', agentName:'Thanaporn', totCalls: 43, time:'00:13:25', status: 'On Calls'},
      {extNo: '1001', agentName:'Thanaporn', totCalls: 43, time:'00:13:25', status: 'On Calls'},
      {extNo: '1001', agentName:'Thanaporn', totCalls: 43, time:'00:13:25', status: 'On Calls'},
      {extNo: '1001', agentName:'Thanaporn', totCalls: 43, time:'00:13:25', status: 'On Calls'},
      {extNo: '1001', agentName:'Thanaporn', totCalls: 43, time:'00:13:25', status: 'On Calls'},
      {extNo: '1001', agentName:'Thanaporn', totCalls: 43, time:'00:13:25', status: 'On Calls'},
      {extNo: '1001', agentName:'Thanaporn', totCalls: 43, time:'00:13:25', status: 'On Calls'},
      {extNo: '1001', agentName:'Thanaporn', totCalls: 43, time:'00:13:25', status: 'On Calls'},
    ]

    this.cols = [
      { field: 'extNo', header: 'Ext No.' },
      { field: 'agentName', header: 'Agent Name' },
      { field: 'totCalls', header: 'TOT Calls' },
      { field: 'time', header: 'Time' },
      { field: 'status', header: 'Status' }
    ];

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['8.00', '9.00', '10.00', '11.00', '12.00', '13.00', '14.00','15.00','16.00','17.00','18.00'],
      datasets: [
        {
          type: 'bar',
          label: 'Incoming Calls',
          backgroundColor: documentStyle.getPropertyValue('--primary-700'),
          data: [34, 56, 72, 69, 54, 42, 47, 65, 51, 41],
          yAxisID:'incoming',
          order: 2
          // borderColor: 'white',
          // borderWidth: 2
        },
        {
          type: 'line',
          label: '% Calls per Hrs',
          borderColor: documentStyle.getPropertyValue('--orange-500'),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [64, 105, 136, 130, 102, 79, 89, 122, 96, 77],
          yAxisID:'percent',
          order: 1
        },
      ]
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        title: {
          display: true,
          text: 'Call Interval'
        },
        legend: {
          onClick: (click: any, legendItem: any, legend: any) => {
            const datasets = legend.legendItems.map((dataset: any, index: any) => {
              return dataset.text;
            });

            const index = datasets.indexOf(legendItem.text);
            if(legend.chart.isDatasetVisible(index) === true){
              legend.chart.hide(index);
            }
            else {
              legend.chart.show(index);
            }
          },
          labels: {
            usePointStyle: true,
            generateLabels: (chart: any) =>{
              let visibility: boolean[] = [];
              for(let i = 0; i < chart.data.datasets.lenght; i++){
                if(chart.isDatasetVisible(i) === true){
                  visibility.push(false);
                }
                else{
                  visibility.push(true);
                }
              };

              let pointStyle: string[] = [];
              chart.data.datasets.forEach((dataset: any) => {
                if(dataset.type === 'line'){
                  pointStyle.push('line');
                }
                else{
                  pointStyle.push('rect');
                }
              });

              return chart.data.datasets.map(
                (dataset: any, index: any) => ({
                  text:dataset.label,
                  fillStyle:dataset.backgroundColor,
                  strokeStyle:dataset.borderColor,
                  pointStyle: pointStyle[index],
                  hidden: visibility[index]
                })
              )
            }
          },
          position: "bottom"
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        incoming: {
          ticks: {
            min: -10,
            max: 100,
            stepSize: 50,
          },
          type: 'linear',
          position: 'left',
          grid: {
            color: surfaceBorder
          }
        },
        percent: {
          ticks: {
            min: 0,
            max: 100,
            stepSize: 50,
            callback: function (value: number) {
              return ((value*10) / 100) + '%'; // convert it to percentage
            },
          },
          type: 'linear',
          position: 'right',
          grid: {
            display: false
          }
        }
        // y: {
        //   ticks: {
        //     //stepSize: 50,
        //     color: textColorSecondary
        //   },
        //   grid: {
        //     color: surfaceBorder
        //   }
        // }
      }
    };
  }
}
