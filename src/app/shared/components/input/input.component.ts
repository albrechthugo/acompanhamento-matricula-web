import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() type = '';
  @Input() class = '';
  @Input() placeholder = '';

  constructor() { }

  ngOnInit(): void {
  }

}
