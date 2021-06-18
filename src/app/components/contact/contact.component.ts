import { Component, OnInit } from '@angular/core';
import { emit } from 'cluster';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  email: string;
  subject: string;
  body: string;

  constructor() {
    this.email = 'example@lntinfotech.invalid';
  }

  ngOnInit(): void {}

  getEmailString(): string {
    this.subject = (document.querySelector(
      '#subject',
    ) as HTMLInputElement).value;
    this.body = (document.querySelector(
      '#body',
    ) as HTMLInputElement).value;
    return (
      'mailto:' +
      this.email +
      '?Subject=' +
      this.subject +
      '?body=' +
      this.body
    );
  }
}
