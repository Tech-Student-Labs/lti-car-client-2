import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  loading = false;
  invalidLogin = false;
  router: Router;
  http: HttpClient;

  constructor(
    private formBuilder: FormBuilder,
    _http: HttpClient,
    _router: Router,
  ) {
    this.http = _http;
    this.router = _router;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) return;
    this.loading = true;
    this.login(this.form);
  }

  login(form: FormGroup): void {
    const credentials = JSON.stringify(form.value);
    this.http
      .post('http://localhost:5000/api/auth/login', credentials, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (response) => {
          const token = (<any>response).token;
          localStorage.setItem('jwt', token);
          console.log(token);
          this.invalidLogin = false;
          this.router.navigate(['/']);
        },
        (err) => {
          this.invalidLogin = true;
        },
      );
  }
}
