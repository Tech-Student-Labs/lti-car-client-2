import { Component, OnInit } from '@angular/core';
import { emit } from 'cluster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  email: string;

  constructor() {
    this.email = 'SellUsStuffCars@email.com';
  }

  ngOnInit(): void {}

  sendEmail = (name: string, subject: string, body: string) => {
    const emailString =
      'mailto:' +
      this.email +
      '?subject=' +
      name +
      ' - ' +
      subject +
      '&body=' +
      body;

    window.location.href = emailString;
  };
}
