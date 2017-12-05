import { Component, OnInit } from '@angular/core';
import { NavbarService } from './ui/navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() { }

  constructor(private _nav: NavbarService){ }
}
