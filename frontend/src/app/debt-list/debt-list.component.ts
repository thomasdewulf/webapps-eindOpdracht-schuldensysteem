import { Component, OnInit } from '@angular/core';
import { DebtDataService } from '../debt-data.service';
import {Debt} from '../debt/debt.model';

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.css'],
  providers: [DebtDataService]
})
export class DebtListComponent implements OnInit {

  private _debts: Debt[];
  constructor(private _debtDataService: DebtDataService) { }

  ngOnInit() {
    this._debtDataService.debts.subscribe(items => this._debts = items);
  }

  get debts()
  {
    return this._debts;
  }

}
