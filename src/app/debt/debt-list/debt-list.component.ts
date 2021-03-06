import { Component, OnInit } from '@angular/core';
import { DebtDataService } from '../debt-data.service';
import {Debt} from '../debt.model';
import { NavbarService } from '../../ui/navbar/navbar.service';
import { TitleService } from '../../ui/title.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DebtDetailComponent } from '../debt-detail/debt-detail.component';
import { AddDebtComponent } from '../add-debt/add-debt.component';

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.scss'],
  providers: [DebtDataService]
})
export class DebtListComponent implements OnInit {

  private _debts: Debt[];
  private _debtsNew: Debt[];
  constructor(
    private _debtDataService: DebtDataService,
    private _navbarService: NavbarService,
    private _title: TitleService,
    private modalService: NgbModal) {
    }

  ngOnInit() {
   
  
    this._navbarService.show();
    this.updateDebts();
    this._title.setNewTitle('Alle schulden');
  }

  get debts()
  {
    return this._debts;
  }

  private updateDebts()
  {
    this._debtDataService.getDebtForUser().subscribe(items => this._debts = items);
  }

  open() {
    const modalRef = this.modalService.open(AddDebtComponent).result.then(item => {
      this.updateDebts();
    });

  }

}
