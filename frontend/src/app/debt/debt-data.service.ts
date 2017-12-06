import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Debt} from './debt.model';
import { AuthenticationService } from '../user/authentication.service';

@Injectable()
export class DebtDataService {

  private _appUrl = 'http://localhost:4200/API/debts/';
  private currentUser;
  constructor(private http: Http, private auth: AuthenticationService) { 
    this.auth.user$.subscribe(user => this.currentUser = user);
  }

  get debts(): Observable<Debt[]> {
    return this.http.get(this._appUrl, {headers: new Headers({Authorization: `Bearer ${this.auth.token}`})}).map(response =>
      response.json().map(item => Debt.fromJSON(item))
  );

  }

  getDebt(id): Observable<Debt> {
    return this.http.get(`${this._appUrl}${id}`)
      .map(response => response.json()).map(item => Debt.fromJSON(item));
  }

  addNewDebt(debt): Observable<Debt> {
    return this.http.post(
      `${this._appUrl}/${this.currentUser.id}`,
      debt,
      {headers: new Headers({Authorization: `Bearer ${this.auth.token}`})})
      .map(res => res.json())
      .map(item => Debt.fromJSON(item));
  }


}
