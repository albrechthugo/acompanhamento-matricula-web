import { MessageUtils } from './../../utils/message-utils';
import { StudentService } from './../../services/student/student.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuUtils } from '../../utils/menu-utils';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../../shared/validators/validators';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.css']
})
export class CorrectionComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    examFile: new FormControl()
  });

  public canBlockUi = false;
  public tabItems: MenuItem[] = [];
  private menuUtils = new MenuUtils();

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
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
      examFile: [null, Validators.required]
    });

    this.form.get('examFile')?.disable();
  }

  public getStudentInfo(cpf: string): void {
    if (this.form.get('cpf')?.valid) {
      this.canBlockUi = true;

      this.studentService.getById(cpf).subscribe(student => {
        this.canBlockUi = false;

        this.form.get('cpf')?.setValue(student.cpf);
        this.form.get('cpf')?.disable();
        this.form.get('name')?.setValue(student.name);
        this.form.get('name')?.disable();
      }, () => {
        this.messageService.add(MessageUtils.GetInfoError());
        this.canBlockUi = false;
      });
    }
  }

  public afterSelectFile(event: any): void {
    this.form.get('examFile')?.setValue(event.currentFiles[0].name);
  }
}
