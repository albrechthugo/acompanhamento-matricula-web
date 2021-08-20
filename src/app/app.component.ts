import { Component, OnInit } from '@angular/core';
import { Roles } from './entities/employee/roles/roles-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'acompanhamento-matricula-web';

  ngOnInit(): void {
    window.sessionStorage.setItem('token', 'admin');
    window.sessionStorage.setItem('name', 'admin');
    window.sessionStorage.setItem('role', Roles.ADMIN);
  }
}
