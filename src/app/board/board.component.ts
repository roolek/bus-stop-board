import { Component, OnInit } from '@angular/core';
import { PekaApiService } from '../peka/peka-api.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public name: string;
  public times: any[];

  constructor(private pekaService: PekaApiService) { }

  onBollardChange(symbol: string) {
    this.pekaService.getTimes(symbol).subscribe((res) => {
      this.times = res;
    })
  }

  onSelect(name) {
    this.name = name;
  }

  ngOnInit() {
  }

}
