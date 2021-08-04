import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { MyValidators } from '../../shared/validators/validators';
import { MenuUtils } from '../../utils/menu-utils';
import { Utils } from '../../utils/utils';
import { ExamService } from './../../services/exam/exam.service';
import { StudentService } from './../../services/student/student.service';
import { MessageUtils } from './../../utils/message-utils';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.css']
})
export class CorrectionComponent implements OnInit {

  public get cpfInput(): AbstractControl {
    return this.form.get('cpf') as AbstractControl;
  }

  public get nameInput(): AbstractControl {
    return this.form.get('name') as AbstractControl;
  }

  public form = new FormGroup({
    name: new FormControl(null, Validators.required),
    cpf: new FormControl(null, [Validators.required, MyValidators.validateCpf]),
    examFile: new FormControl(null, Validators.required)
  });

  public canBlockUi = false;
  public tabItems: MenuItem[] = [];
  public fileUrl = '';
  private menuUtils = new MenuUtils();

  constructor(
    private studentService: StudentService,
    private messageService: MessageService,
    private examService: ExamService
    ) { }

  ngOnInit(): void {
    this.setTabMenuItems();
    this.form.get('examFile')?.disable();
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

  public upload(event: any): void {
    this.canBlockUi = true;

    this.form.get('examFile')?.setValue(event.files[0].name);
    this.examService.upload(event.files, Utils.noMaskCpf(this.cpfInput.value))
      .subscribe(() => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.GenericSuccess());
        this.form.reset();
        this.cpfInput.enable();
        this.nameInput.enable();
      }, () => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.GenericError());
        this.cpfInput.enable();
        this.nameInput.enable();
      });
  }
}
