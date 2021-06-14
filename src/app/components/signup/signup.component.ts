import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Signup: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.Signup = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      Name: ['', Validators.required],
      Email: ['', Validators.required]
    });
  }
  onSubmit(form: FormGroup){
    //do stuff :)
  }
}
