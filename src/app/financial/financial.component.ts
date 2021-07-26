import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { StudentService } from '../services/student/student.service';
import { MessageUtils } from '../utils/message-utils';
import { StudentBaseForm } from './../shared/forms/student/student-base.form';
import { Utils } from '../utils/utils';
import { Document } from '../entities/document/document';
import { DocumentEnum } from '../entities/document/document-enum';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  public studentBaseForm: StudentBaseForm;
  public canBlockUi = false;
  public studentDocuments: Document[] = [];

  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private messageService: MessageService,
              private employeeService: EmployeeService) { this.studentBaseForm = new StudentBaseForm(this.fb); }

  ngOnInit(): void {
    this.studentBaseForm.name?.disable();
  }

  public onCpfNewValue(cpf: string): void {
    if (cpf.length === 11) {
      this.studentBaseForm.cpf?.setValue(Utils.formatCpf(cpf));
    }
  }

  public getStudentInfo(cpf: string): void {
    if (this.studentBaseForm.cpf?.valid) {
      this.canBlockUi = true;

      this.studentService.getById(Utils.noMaskCpf(cpf)).subscribe(student => {
        this.canBlockUi = false;
        this.studentBaseForm.cpf?.setValue(student.cpf);
        this.studentBaseForm.cpf?.disable();
        this.studentBaseForm.name?.setValue(student.name);
        this.studentBaseForm.name?.disable();
        this.studentDocuments = student.documents as Document[];
      }, () => {
        this.messageService.add(MessageUtils.GetInfoError());
        this.canBlockUi = false;
      });
    }
  }

  public download(url: string): void {
    window.open(url);
  }

  public sendFile(event: any, docType: string | DocumentEnum): void {
    this.canBlockUi = true;

    this.employeeService.uploadDoc(event.files, docType as DocumentEnum, Utils.noMaskCpf(this.studentBaseForm?.cpf?.value))
      .subscribe(() => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.GenericSuccess());
        this.studentBaseForm.form.reset();
      }, () => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.GenericError());
      });
  }
}
