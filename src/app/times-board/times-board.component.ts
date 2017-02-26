import { Component, Input, OnInit,  
  state,
  style,
  transition,
  animate } from '@angular/core';

@Component({
  selector: 'app-times-board',
  templateUrl: './times-board.component.html',
  styleUrls: ['./times-board.component.css'],
})
export class TimesBoardComponent implements OnInit {
  @Input() times: any;
  constructor() { }

  ngOnInit() {
  }

}
