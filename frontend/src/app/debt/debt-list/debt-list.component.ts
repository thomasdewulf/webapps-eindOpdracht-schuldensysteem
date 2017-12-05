import { Component, OnInit } from '@angular/core';
import { DebtDataService } from '../debt-data.service';
import {Debt} from '../debt.model';
import { NavbarService } from '../../navbar/navbar.service';

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.scss'],
  providers: [DebtDataService]
})
export class DebtListComponent implements OnInit {

  private _debts: Debt[];
  constructor(private _debtDataService: DebtDataService, private _navbarService: NavbarService) { }

  ngOnInit() {
    this._debtDataService.debts.subscribe(items => this._debts = items);
    this._navbarService.show();
  }

  get debts()
  {
    return this._debts;
  }

}
