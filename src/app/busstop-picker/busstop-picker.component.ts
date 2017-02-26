import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ng2-bootstrap';

import { PekaApiService } from '../peka/peka-api.service';

@Component({
  selector: 'app-busstop-picker',
  templateUrl: './busstop-picker.component.html',
  styleUrls: ['./busstop-picker.component.css']
})



export class BusStopPickerComponent {

  public dataSource: Observable<any>;
  public asyncSelected: string;
  @Output()
  public name = new EventEmitter<string>();

  public constructor(private pekaApiService: PekaApiService) {
    this.dataSource = Observable
      .create((observer: any) => {
        observer.next(this.asyncSelected);
      })
      .mergeMap((token: string) => this.getData(token));
  }

  getData(pattern: string) {
    return this.pekaApiService.getStopPoints(pattern)
  }

  public typeaheadOnSelect(e: TypeaheadMatch): void {
    this.name.emit(e.item.name);
  }


}