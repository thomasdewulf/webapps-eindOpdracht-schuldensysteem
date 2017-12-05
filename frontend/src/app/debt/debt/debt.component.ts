import { Component, OnInit, Input } from '@angular/core';
import {Debt} from './../debt.model';
import { DebtDataService } from '../debt-data.service';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.scss']
})
export class DebtComponent implements OnInit {

  @Input() public debt: Debt;

  constructor(private _debtDataService: DebtDataService) { }

  ngOnInit() {

  }

}
