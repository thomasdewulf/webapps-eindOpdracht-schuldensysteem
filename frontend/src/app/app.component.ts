import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './user/authentication.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() { }

  constructor(private authService: AuthenticationService){ }

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }

}
