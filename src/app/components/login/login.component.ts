import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  invalidLogin = false;
  router: Router;
  http: HttpClient;


  constructor(private formBuilder: FormBuilder, _http: HttpClient, _router: Router) {
    this.http = _http;
    this.router = _router;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(form: FormGroup): void {
    // this.submitted = true;

    if (form.invalid) return;
    // this.loading = true;
    this.login(form);
  }

  login(form: FormGroup): void {
    const credentials = JSON.stringify(form.value);
    this.http.post("https://localhost:5001/api/auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      console.log(token);
      // this.invalidLogin = false;
      this.router.navigate(["/"]);
    }, err => {
      // this.invalidLogin = true;
    });
  }
}
