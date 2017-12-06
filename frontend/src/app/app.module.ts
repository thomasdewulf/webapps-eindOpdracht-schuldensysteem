import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing/app-routing-module';
import {DebtModule} from './debt/debt.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserModule} from './user/user.module';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NavbarService } from './ui/navbar/navbar.service';
import { TitleService } from './ui/title.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    NavbarService,
    TitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
