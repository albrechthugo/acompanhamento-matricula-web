import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { StudentService } from './../services/student/student.service';
import { StudentBaseForm } from './../shared/forms/student/student-base.form';
import { MessageUtils } from './../utils/message-utils';
import { RatingCriteriaHelper } from './helpers/ rating-criteria';

@Component({
  selector: 'app-corrector',
  templateUrl: './corrector.component.html',
  styleUrls: ['./corrector.component.css']
})
export class CorrectorComponent implements OnInit {

  public studentBaseform: StudentBaseForm;
  public criterias = RatingCriteriaHelper.criterias();
  public canBlockUi = false;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private messageService: MessageService
  ) { this.studentBaseform = new StudentBaseForm(this.fb); }

  ngOnInit(): void {
  }

  public getStudentInfo(cpf: string): void {
    if (this.studentBaseform.cpf?.valid) {
      this.canBlockUi = true;

      this.studentService.getById(cpf).subscribe(student => {
        this.canBlockUi = false;
        this.studentBaseform.cpf?.setValue(student.cpf);
        this.studentBaseform.cpf?.disable();
        this.studentBaseform.name?.setValue(student.name);
        this.studentBaseform.name?.disable();
      }, () => {
        this.messageService.add(MessageUtils.GetInfoError());
        this.canBlockUi = false;
      });
    }
  }
}
