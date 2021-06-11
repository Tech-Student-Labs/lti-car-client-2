import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(form: FormGroup) {
    alert('User has logged in');
    console.log(form.value.userName);
    console.log(form.value.password);
  }

  validatePassword(form: FormGroup){
    if(form.validator){
      alert('Password must be more than 5 characters');
    }
  }
}
