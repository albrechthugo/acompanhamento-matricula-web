import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() icon = '';
  @Input() label = '';
  @Input() status = '';
  @Input() showNote = false;
  @Input() note = 0;
  @Input() disableWidget = false;

  constructor() { }

  ngOnInit(): void {
  }

}
