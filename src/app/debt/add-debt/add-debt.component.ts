import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DebtDataService } from '../debt-data.service';
import { Debt } from '../debt.model';
import {Router} from '@angular/router';





@Component({
  selector: 'app-add-debt',
  templateUrl: './add-debt.component.html',
  styleUrls: ['./add-debt.component.scss']
})
export class AddDebtComponent implements OnInit {
  @Output() public newDebt = new EventEmitter<Debt>();
  public debt: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private dataService: DebtDataService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.debt = this.fb.group(
      {
        title: ['', [Validators.required, Validators.minLength(2)]],
        description: ['', [Validators.required, Validators.minLength(2)]],
        price: ['', [Validators.required, Validators.minLength(2)]],
        dateSpent: ['', [Validators.required, Validators.minLength(2)]]
      }
    );
  }

  onSubmit() {
    const debt = new Debt(this.debt.value.title,
      this.debt.value.description,
      this.debt.value.price,
      this.debt.value.dateSpent);
      // TODO valideren
     this.dataService.addNewDebt(debt).subscribe(res => {
       if (res) {
        this.activeModal.close();
       }
     });

  }

}
