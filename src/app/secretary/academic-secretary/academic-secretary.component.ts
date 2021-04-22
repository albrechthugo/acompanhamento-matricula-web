import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { StudentService } from '../../services/student/student.service';
import { MenuUtils } from '../../utils/menu-utils';
import { MessageUtils } from '../../utils/message-utils';
import { StudentBaseForm } from './../../shared/forms/student/student-base.form';

@Component({
  selector: 'app-academic-secretary',
  templateUrl: './academic-secretary.component.html',
  styleUrls: ['./academic-secretary.component.css']
})
export class AcademicSecretaryComponent implements OnInit {

  public studentBaseForm: StudentBaseForm;
  public canBlockUi = false;
  public tabItems: MenuItem[] = [];
  private menuUtils = new MenuUtils();

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private messageService: MessageService
  ) { this.studentBaseForm = new StudentBaseForm(this.fb); }

  ngOnInit(): void {
    this.setTabMenuItems();
  }

  private setTabMenuItems(): void {
    this.tabItems = this.menuUtils.secretaryTabItems;
  }

  public getStudentInfo(cpf: string): void {
    if (this.studentBaseForm.cpf?.valid) {
      this.canBlockUi = true;

      this.studentService.getById(cpf).subscribe(student => {
        this.canBlockUi = false;

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
