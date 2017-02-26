import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class PekaApiService {

  constructor(private http: Http) { }

  public getStopPoints(pattern: string) {
    const GET_STOP_POINTS_METHOD = 'getStopPoints';
    const GET_STOP_POINTS_PARAMETER = 'pattern';
    return this.callVmMethod(GET_STOP_POINTS_METHOD, GET_STOP_POINTS_PARAMETER, pattern);
  }

  public getBollardsByStopPoint(pattern: string) {
    const GET_BOLLARDS_BY_STOP_METHOD = 'getBollardsByStopPoint';
    const GET_BOLLARDS_BY_STOP_PARAMTER = 'name';
    return this.callVmMethod(GET_BOLLARDS_BY_STOP_METHOD, GET_BOLLARDS_BY_STOP_PARAMTER, pattern);
  }

  public getBollardsByStreet(pattern: string) {
    const GET_BOLLARDS_BY_STREET_METHOD = 'getBollardsByStreet';
    const GET_BOLLARDS_BY_STREET_PARAMTER = 'name';
    return this.callVmMethod(GET_BOLLARDS_BY_STREET_METHOD, GET_BOLLARDS_BY_STREET_PARAMTER, pattern);
  }

  public getTimes(symbol: string) {
    const GET_TIMES_METHOD = 'getTimes';
    const GET_TIMES_PARAMTER = 'symbol';
    return this.callVmMethod(GET_TIMES_METHOD, GET_TIMES_PARAMTER, symbol);
  }

  private callVmMethod(methodName: string, paramName: string, paramValue: string) {
    const date = Date.now() * 1000;
    const body = new URLSearchParams();
    body.set('method', methodName);
    body.set('p0', `{ "${paramName}": "${paramValue}" }`);
    return this.http.post(`vm/method.vm?ts=${date}`, body)
      .map(r => r.json().success);
  }
}
