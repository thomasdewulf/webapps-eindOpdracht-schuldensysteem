import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Debt} from './debt.model';
import { AuthenticationService } from '../user/authentication.service';

@Injectable()
export class DebtDataService {

  private _appUrl = 'http://localhost:4200/API/debts/';

  constructor(private http: Http, private auth: AuthenticationService) { }

  get debts(): Observable<Debt[]> {
    return this.http.get(this._appUrl, {headers: new Headers({Authorization: `Bearer ${this.auth.token}`})}).map(response =>
      response.json().map(item => new Debt(item.title, item.description, item.price, item.dateSpent, item.dateEntered))
  );
  }

  getDebt(id): Observable<Debt> {
    return this.http.get(`${this._appUrl}/debt/${id}`)
      .map(response => response.json()).map(item => Debt.fromJSON(item));
  }
}
