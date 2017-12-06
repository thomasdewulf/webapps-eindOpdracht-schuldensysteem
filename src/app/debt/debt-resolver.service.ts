import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DebtDataService } from './debt-data.service';
import { Observable } from 'rxjs/Observable';
import { Debt } from './debt.model';



@Injectable()
export class DebtResolver implements Resolve<Debt> {

  constructor(private debtService: DebtDataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Debt> {
    return this.debtService.getDebt(route.params['id']);
  }
}
