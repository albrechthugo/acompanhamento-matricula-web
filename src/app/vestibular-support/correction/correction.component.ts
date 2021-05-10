import { environment } from './../../../environments/environment.prod';
import { ExamService } from './../../services/exam/exam.service';
import { MessageUtils } from './../../utils/message-utils';
import { StudentService } from './../../services/student/student.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuUtils } from '../../utils/menu-utils';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../../shared/validators/validators';
import { Utils } from '../../utils/utils';

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
    name: new FormControl(),
    cpf: new FormControl(),
    examFile: new FormControl()
  });

  public canBlockUi = false;
  public tabItems: MenuItem[] = [];
  public fileUrl = '';
  private menuUtils = new MenuUtils();

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private messageService: MessageService,
    private examService: ExamService
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

  public afterSelectFile(event: any): void {
    this.form.get('examFile')?.setValue(event.files[0].name);
    this.examService.upload(event.files, Utils.noMaskCpf(this.cpfInput.value))
      .subscribe(() => {});
  }
}
