import { Component, OnInit, Renderer2 } from '@angular/core';
import { Dashboard } from 'src/interface/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'white');
  }

  dashboard: Dashboard [] = [];

  ngOnInit(): void {
    this.dashboard = [
      {today:'Total Calls', dpa:'256', ncb:'179', tefal:'265', glo:'549', ditp:'213'},
      {today:'Answered Calls', dpa:'250', ncb:'172', tefal:'264', glo:'539', ditp:'209'},
      {today:'Abandoned Calls', dpa:'6', ncb:'7', tefal:'1', glo:'10', ditp:'4'},
      {today:'Service Level in 210s', dpa:'97.7%', ncb:'96.1%', tefal:'99.6%', glo:'98.2%', ditp:'98.1%'},
      {today:'Abandon Rate', dpa:'2.3%', ncb:'3.9%', tefal:'0.4%', glo:'1.8%', ditp:'1.9%'},
      {today:'AHT (Mins)', dpa:'2.56', ncb:'3.01', tefal:'2.32', glo:'3.25', ditp:'3.54'},
      {today:'AVG Speed (Mins)', dpa:'0:03', ncb:'0:03', tefal:'0:02', glo:'0:05', ditp:'0:05'},
    ];
  }

}
