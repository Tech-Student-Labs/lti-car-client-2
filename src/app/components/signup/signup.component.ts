import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {}

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
    alert('User has logged in');
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
