import { Component, OnInit } from '@angular/core';
import { Debt } from '../debt.model';
import { ActivatedRoute } from '@angular/router';
import { DebtDataService } from '../debt-data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-debt-detail-component',
  templateUrl: './debt-detail.component.html',
  styleUrls: ['./debt-detail.component.scss']
})
export class DebtDetailComponent implements OnInit {

private _debt: Debt;

  constructor(private route: ActivatedRoute, private debtDataService: DebtDataService) { }

  ngOnInit() {
 this.route.data.subscribe(item => this._debt = item['debt']);
  }

  get debt() {
    return this._debt;
  }
}
