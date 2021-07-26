import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuUtils } from '../../utils/menu-utils';
import { StudentService } from '../../services/student/student.service';
import { MyValidators } from '../../shared/validators/validators';
import { MessageUtils } from '../../utils/message-utils';
import { Utils } from '../../utils/utils';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee/employee.service';
import { DocumentEnum } from '../../entities/document/document-enum';

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
  private cpfParam = '';

  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private messageService: MessageService,
              private employeeService: EmployeeService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.setTabMenuItems();
    this.formBuilder();
  }

  private getParamsFromUrl(): void {
    this.route.params.subscribe(params => {
      this.cpfParam = params['id'];
    });
  }

  public onCpfNewValue(cpf: string): void {
    if (cpf.length === 11) {
      this.form.get('cpf')?.setValue(Utils.formatCpf(cpf));
    }
  }

  private setTabMenuItems(): void {
    this.tabItems = this.menuUtils.secretaryTabItems;
  }

  private formBuilder(): void {
    this.form = this.fb.group({
      identityFile: [null, Validators.required],
      residencialFile: [null, Validators.required],
      schoolRecordFile: [null, Validators.required],
      voterRegistrationFile: [null, Validators.required],
      birthCertificateFile: [null, Validators.required]
    });

    this.disableFileInputs();
  }

  private disableFileInputs(): void {
    this.form.get('identityFile')?.disable();
    this.form.get('residencialFile')?.disable();
    this.form.get('schoolRecordFile')?.disable();
    this.form.get('voterRegistrationFile')?.disable();
    this.form.get('birthCertificateFile')?.disable();
  }

  public sendFile(event: any, docType: string | DocumentEnum): void {
    this.canBlockUi = true;

    this.employeeService.uploadDoc(
      event.files,
      docType as DocumentEnum,
      this.cpfParam
    ).subscribe(() => {
      this.canBlockUi = false;
      this.messageService.add(MessageUtils.GenericSuccess());
      this.form.reset();
    }, () => {
      this.canBlockUi = false;
      this.messageService.add(MessageUtils.GenericError());
    });
  }
}
