import { DownloadService } from './../services/download.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { StudentService } from '../services/student/student.service';
import { MessageUtils } from '../utils/message-utils';
import { StudentBaseForm } from './../shared/forms/student/student-base.form';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  public studentBaseForm: StudentBaseForm;
  public canBlockUi = false;
  public canDisableActions = true;

  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private messageService: MessageService,
              private downloadService: DownloadService) { this.studentBaseForm = new StudentBaseForm(this.fb); }

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
        this.canDisableActions = false;
        this.studentBaseForm.cpf?.setValue(student.cpf);
        this.studentBaseForm.cpf?.disable();
        this.studentBaseForm.name?.setValue(student.name);
        this.studentBaseForm.name?.disable();
      }, () => {
        this.messageService.add(MessageUtils.GetInfoError());
        this.canBlockUi = false;
      });
    }
  }
}
