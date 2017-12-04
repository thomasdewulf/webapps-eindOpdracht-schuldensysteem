import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { AuthenticationService } from '../user/authentication.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public nav: NavbarService, private authService: AuthenticationService) { }

  ngOnInit() {
  }
  get currentUser(): Observable<string> {
    return this.authService.user$;
  }
}
