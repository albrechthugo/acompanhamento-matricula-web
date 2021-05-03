import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuUtils } from '../../utils/menu-utils';
import { StudentService } from '../../services/student/student.service';
import { MyValidators } from '../../shared/validators/validators';
import { MessageUtils } from '../../utils/message-utils';
import { Utils } from '../../utils/utils';
import { ActivatedRoute } from '@angular/router';

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
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.setTabMenuItems();
    this.formBuilder();
  }

  private getParamsFromUrl(): void {
    this.route.params.subscribe(params =>
      this.cpfParam = params.cpf
    );
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

      this.studentService.getById(Utils.noMaskCpf(cpf)).subscribe(student => {
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
