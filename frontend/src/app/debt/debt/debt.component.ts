import { Component, OnInit, Input } from '@angular/core';
import {Debt} from './../debt.model';
import { DebtDataService } from '../debt-data.service';
import {DatePipe, NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.scss']
})
export class DebtComponent implements OnInit {

  @Input() public debt: Debt;
            public priceColor: string;
            public debtId: string;
  constructor(private _debtDataService: DebtDataService) { }

  ngOnInit() {
  if (this.debt.price < 0) {
    this.priceColor = 'colorNegative';
  } else {
    this.priceColor = 'colorPositive';
  }
}
}
