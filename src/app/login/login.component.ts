import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from './../auth/auth.service';
import { UserDto } from './../entities/user/user-dto';
import { MessageUtils } from './../utils/message-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {

  get user(): UserDto {
    return {
      username: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
    };
  }

  public userForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  public canBlockUi = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    alert('Basta clicar no botão login para acessar o sistema');
  }

  public mockedLogin(): void {
    this.router.navigate(['dashboard']);
  }

  public login(): void {
    if (this.userForm.valid) {
      this.canBlockUi = true;
      this.authService.doLogin(this.user).subscribe(
        () => {
          this.canBlockUi = false;
          this.router.navigate(['dashboard']);
        },
        () => {
          this.canBlockUi = false;
          this.messageService.add(MessageUtils.LoginError());
        }
      );
    }
  }
}
