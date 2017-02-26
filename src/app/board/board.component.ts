import { Component, OnInit, OnDestroy } from '@angular/core';
import { PekaApiService } from '../peka/peka-api.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {
  public name: string;
  public times: any[];
  readonly POLLING_INTERVAL: number = 5000;
  private timesSubscription: Subscription;
  constructor(private pekaService: PekaApiService) { }



  onBollardChange(symbol: string) {
    if (this.timesSubscription)
      this.timesSubscription.unsubscribe();
    this.timesSubscription = this.startPolling(symbol).subscribe((res) => {
      this.times = res;
    })
  }

  startPolling(symbol: string) {
    return Observable.interval(this.POLLING_INTERVAL).startWith(0)
      .switchMap(() => this.getTimes(symbol))
  }

  getTimes(symbol: string) {
    return this.pekaService.getTimes(symbol);
  }

  onSelect(name) {
    this.name = name;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.timesSubscription)
      this.timesSubscription.unsubscribe();
  }

}
