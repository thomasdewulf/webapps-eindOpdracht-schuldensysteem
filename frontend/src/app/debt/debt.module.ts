import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DebtDataService } from './debt-data.service';
import { DebtComponent } from './debt/debt.component';
import { DebtListComponent } from './debt-list/debt-list.component';

import { DebtResolver } from './debt-resolver.service';
import { DebtDetailComponent } from './debt-detail/debt-detail.component';
import { NavbarService } from '../navbar/navbar.service';

const routes = [
  { path: 'list', component: DebtListComponent },
  { path: ':id', component: DebtDetailComponent,
    resolve: { debt: DebtResolver} }
];

@NgModule({
  declarations: [
    DebtComponent,
    DebtListComponent,
    DebtDetailComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DebtDataService,
    DebtResolver
  ],
})
export class DebtModule { }
