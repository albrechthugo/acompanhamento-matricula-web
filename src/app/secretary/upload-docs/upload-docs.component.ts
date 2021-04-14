import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuUtils } from '../../utils/menu-utils';
import { StudentService } from '../../services/student/student.service';
import { MyValidators } from '../../shared/validators/validators';
import { MessageUtils } from '../../utils/message-utils';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    identityFile: new FormControl(),
    residencialFile: new FormControl(),
    schoolRecordFile: new FormControl(),
    voterRegistrationFile: new FormControl(),
    birthCertificateFile: new FormControl()
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
    this.tabItems = this.menuUtils.secretaryTabItems;
  }

  private formBuilder(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      cpf: [null, [Validators.required, MyValidators.validateCpf]],
      identityFile: [null, Validators.required],
      residencialFile: [null, Validators.required],
      schoolRecordFile: [null, Validators.required],
      voterRegistrationFile: [null, Validators.required],
      birthCertificateFile: [null, Validators.required]
    });

    this.disableFileInputs();
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

  private disableFileInputs(): void {
    this.form.get('identityFile')?.disable();
    this.form.get('residencialFile')?.disable();
    this.form.get('schoolRecordFile')?.disable();
    this.form.get('voterRegistrationFile')?.disable();
    this.form.get('birthCertificateFile')?.disable();
  }
}
