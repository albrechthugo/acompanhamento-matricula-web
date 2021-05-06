import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { MyValidators } from 'src/app/shared/validators/validators';
import { MenuUtils } from 'src/app/utils/menu-utils';
import { Utils } from '../../utils/utils';
import { MessageUtils } from '../../utils/message-utils';
import { StudentService } from '../../services/student/student.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  public get cpfInput(): AbstractControl {
    return this.form.get('cpf') as AbstractControl;
  }

  public get nameInput(): AbstractControl {
    return this.form.get('name') as AbstractControl;
  }

  public form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    examUrl: new FormControl()
  });

  public canBlockUi = false;
  public tabItems: MenuItem[] = [];
  private menuUtils = new MenuUtils();

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private studentService: StudentService
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

  public onCpfNewValue(cpf: string): void {
    if (cpf.length === 11) {
      this.cpfInput?.setValue(Utils.formatCpf(cpf));
    }
  }

  public getStudentInfo(cpf: string): void {
    if (this.cpfInput?.valid) {
      this.canBlockUi = true;

      this.studentService.getById(Utils.noMaskCpf(cpf)).subscribe(student => {
        this.canBlockUi = false;
        this.cpfInput?.setValue(student.cpf);
        this.cpfInput?.disable();
        this.nameInput?.setValue(student.name);
        this.nameInput?.disable();
      }, () => {
        this.messageService.add(MessageUtils.GetInfoError());
        this.canBlockUi = false;
      });
    }
  }
}
