import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Debt} from './debt/debt.model';

@Injectable()
export class DebtDataService {

  private _appUrl = 'http://localhost:4200/API/debts/';

  constructor(private http: Http) { }

  get debts(): Observable<Debt[]> {
    return this.http.get(this._appUrl).map(response =>
      response.json().map(item => new Debt(item.title, item.description, item.price, item.dateSpent, item.dateEntered))
  );
  }
}
