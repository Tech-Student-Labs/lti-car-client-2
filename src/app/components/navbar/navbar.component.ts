import { Component, OnInit } from '@angular/core';
import { tokenGetter } from 'src/app/app.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  token : String;
  constructor() {}

  ngOnInit(): void {
    this.token = tokenGetter();
  }
}
