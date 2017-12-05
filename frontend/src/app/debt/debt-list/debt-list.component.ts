import { Component, OnInit } from '@angular/core';
import { DebtDataService } from '../debt-data.service';
import {Debt} from '../debt.model';
import { NavbarService } from '../../ui/navbar/navbar.service';
import { TitleService } from '../../ui/title.service';

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.scss'],
  providers: [DebtDataService]
})
export class DebtListComponent implements OnInit {

  private _debts: Debt[];
  constructor(private _debtDataService: DebtDataService, private _navbarService: NavbarService, private _title: TitleService) {


   }

  ngOnInit() {
    this._debtDataService.debts.subscribe(items => this._debts = items);
    this._navbarService.show();
    this._title.setNewTitle('Alle schulden');
  }

  get debts()
  {
    return this._debts;
  }

}
