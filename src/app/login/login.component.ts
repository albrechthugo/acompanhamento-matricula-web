import { MessageUtils } from './../utils/message-utils';
import { MessageService } from 'primeng/api';
import { UserDto } from './../entities/user/user-dto';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  get user(): UserDto {
    return {
      username: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value
    };
  }

  public userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  public canBlockUi = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private messageService: MessageService) { }

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
      this.authService.doLogin(this.user).subscribe(() => {
        this.canBlockUi = false;
        this.router.navigate(['dashboard']);
      }, () => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.LoginError());
      });
    }
  }

}
