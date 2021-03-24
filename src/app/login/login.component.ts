import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get user(): { email: string, password: string } {
    return {
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value
    };
  }

  public userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  public canBlockUi = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formBuilder();
  }

  private formBuilder(): void {
   this.userForm = this.fb.group({
     email: [null, [Validators.required, Validators.email]],
     password: [null, Validators.required]
   });
  }

  public login(): void {
    if (this.userForm.valid) {
      this.canBlockUi = true;
      setTimeout(() => {
        this.router.navigateByUrl('/dashboard');
      }, 3000);
    }
  }

}
