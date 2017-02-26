import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { PekaApiService } from '../peka/peka-api.service';

@Component({
  selector: 'app-direction-picker',
  templateUrl: './direction-picker.component.html',
  styleUrls: ['./direction-picker.component.css']
})
export class DirectionPickerComponent {

  public dataSource: Observable<any>;
  public asyncSelected: string;
  public directions: any[];
  @Input()
  public set name(value: string) {
    this.pekaApiService.getBollardsByStopPoint(value).subscribe((res) => {
      this.directions = res.bollards;
    }
    )
  }

  @Output() bollardChange = new EventEmitter<string>();


  public constructor(private pekaApiService: PekaApiService) {
  }

  public onBollardChange(symbol: string) {
    this.bollardChange.next(symbol)
  }




}
