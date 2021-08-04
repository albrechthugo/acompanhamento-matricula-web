import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { MyValidators } from 'src/app/shared/validators/validators';
import { MenuUtils } from 'src/app/utils/menu-utils';
import { ExamService } from '../../services/exam/exam.service';
import { StudentService } from '../../services/student/student.service';
import { MessageUtils } from '../../utils/message-utils';
import { Utils } from '../../utils/utils';

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

  public get urlInput(): AbstractControl {
    return this.form.get('examUrl') as AbstractControl;
  }

  public form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(null, [Validators.required, MyValidators.validateCpf]),
    examUrl: new FormControl(null, Validators.required)
  });

  public canBlockUi = false;
  public tabItems: MenuItem[] = [];
  private menuUtils = new MenuUtils();

  constructor(
    private messageService: MessageService,
    private studentService: StudentService,
    private examService: ExamService
    ) { }

  ngOnInit(): void {
    this.setTabMenuItems();
  }

  private setTabMenuItems(): void {
    this.tabItems = this.menuUtils.vestibularSupportTabItems;
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

  public sendFileUrl(): void {
    this.canBlockUi = true;

    const exam = {
      cpf: Utils.noMaskCpf(this.cpfInput.value),
      url: this.urlInput.value
    };

    if (this.form?.valid) {
      this.examService.create(exam).subscribe(() => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.GenericSuccess());
        this.form.reset();
      }, () => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.GenericError());
      });
    }
  }
}
