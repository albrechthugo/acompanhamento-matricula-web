import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { MyValidators } from 'src/app/shared/validators/validators';
import { MenuUtils } from 'src/app/utils/menu-utils';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    examUrl: new FormControl()
  });

  public canBlockUi: boolean = false;
  public tabItems: MenuItem[] = [];
  private menuUtils = new MenuUtils();

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.setTabMenuItems();
    this.formBuilder();
  }

  private setTabMenuItems(): void {
    this.tabItems = this.menuUtils.vestibularSupportTabItems;
  }

  private formBuilder(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      cpf: [null, [Validators.required, MyValidators.validateCpf]],
      examUrl: [null, Validators.required]
    });
  }
}
