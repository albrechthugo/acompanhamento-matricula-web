import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { DocumentEnum } from '../../entities/document/document-enum';
import { EmployeeService } from '../../services/employee/employee.service';
import { MenuUtils } from '../../utils/menu-utils';
import { MessageUtils } from '../../utils/message-utils';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    identityFile: new FormControl(null, Validators.required),
    residencialFile: new FormControl(null, Validators.required),
    schoolRecordFile: new FormControl(null, Validators.required),
    voterRegistrationFile: new FormControl(null, Validators.required),
    birthCertificateFile: new FormControl(null, Validators.required)
  });

  public canBlockUi = false;
  public tabItems: MenuItem[] = [];
  private menuUtils = new MenuUtils();
  private cpfParam = '';

  constructor(private messageService: MessageService,
              private employeeService: EmployeeService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.setTabMenuItems();
    this.disableFileInputs();
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
