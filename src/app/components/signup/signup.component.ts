import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  router: Router;
  http: HttpClient;

  constructor(private fb: FormBuilder, _http: HttpClient, _router: Router) {
    this.http = _http;
    this.router = _router;
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      Name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      Email: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
      Password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      PasswordConfirm: ['', Validators.required]},
      {validator : this.comparePasswords}
    );
  }
  onSubmit(form: FormGroup){
    // alert('User has logged in');
    if (form.invalid) return;
    this.register(form);
  }

  register(form: FormGroup): void {
    const userData = JSON.stringify(form.value);
    this.http.post("https://localhost:5001/User", userData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })})
      .subscribe(response => {
        const token = (<any>response).token;
        // localStorage.setItem("jwt", token);
        // console.log(token);
        // this.invalidLogin = false;
        this.router.navigate(["/"]);
      }, err => {
        // this.invalidLogin = true;
      }
    );
  }

  comparePasswords(fb:FormGroup){
    let confirm = fb.get('PasswordConfirm');

    if(confirm.errors == null || 'passwordMismatch' in confirm.errors){
      if(fb.get('Password').value != confirm.value){
        confirm.setErrors({passwordMismatch:true});
      }else{
        confirm.setErrors(null);
      }
    }
  }
}
