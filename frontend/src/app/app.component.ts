import { Component, OnInit } from '@angular/core';
import { NavbarService } from './ui/navbar/navbar.service';
import { TitleService } from './ui/title.service';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './user/authentication.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
private _title: string;
private titleSubscription: Subscription;
  ngOnInit() { 
 
}

  constructor(private _nav: NavbarService, private _titleService: TitleService, private _auth: AuthenticationService) { 
    this.titleSubscription = this._titleService.titleSubject.subscribe((newTitle) => {
      this._title = newTitle;
      console.log(this._title);
    });
  }

  get title(): string{
    return this._title;
  }

  get currentUser(): Observable<string>
  {
    return this._auth.user$;
  }
}
