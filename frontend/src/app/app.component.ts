import { Component, OnInit } from '@angular/core';
import { NavbarService } from './ui/navbar/navbar.service';
import { TitleService } from './ui/title.service';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './user/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() { }

  constructor(private _nav: NavbarService, private _title: TitleService, private _auth: AuthenticationService) { }

  get title(): Observable<string> {
    return this._title.title$;
  }

  get currentUser(): Observable<string>
  {
    return this._auth.user$;
  }
}
