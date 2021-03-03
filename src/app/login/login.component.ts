import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formBuilder();
  }

  formBuilder(): void {
   this.userForm = this.fb.group({
     email: [null, [Validators.required, Validators.email]],
     password: [null, Validators.required]
   });
  }

  login(): void {
    if (this.userForm.valid) {
      const user = {
        email: this.userForm.get('email')?.value,
        password: this.userForm.get('password')?.value,
      };
    }
  }

}
