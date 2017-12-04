import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { DebtComponent } from './debt/debt.component';
import { AddDebtComponent } from './add-debt/add-debt.component';
import { DebtListComponent } from './debt-list/debt-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DebtComponent,
    AddDebtComponent,
    DebtListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
