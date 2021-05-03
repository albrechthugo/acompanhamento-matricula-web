import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StudentDto } from './../entities/student/student-dto';
import { StudentService } from './../services/student/student.service';
import { StudentForm } from './../shared/forms/student/student.form';
import { Utils } from '../utils/utils';
import { MessageService } from 'primeng/api';
import { MessageUtils } from '../utils/message-utils';

@Component({
  selector: 'app-market-relationship',
  templateUrl: './market-relationship.component.html',
  styleUrls: ['./market-relationship.component.css']
})
export class MarketRelationshipComponent implements OnInit {

  get student(): StudentDto {
    return {
      name: this.studentForm.name?.value,
      cpf: Utils.noMaskCpf(this.studentForm.cpf?.value),
      email: this.studentForm.email?.value,
      phone: this.studentForm.phone?.value
    };
  }

  public studentForm: StudentForm;
  public canShowCreateStudentButton = false;
  public canShowSearchStudentButton = true;
  public canShowNewStudentSearchButton = false;
  public canBlockUi = false;
  public showInput = false;

  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private messageService: MessageService) {
    this.studentForm = new StudentForm(this.fb);
  }

  ngOnInit(): void {
  }

  public create(): void {
    if (this.studentForm.form.valid) {
      this.canBlockUi = true;

      this.studentService.create(this.student).subscribe(() => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.StudentRegistrationSuccess());
        this.resetFormAndRemoveInputs();
      }, () => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.StudentRegistrationError());
      });
    }
  }

  private resetFormAndRemoveInputs(): void {
    this.studentForm.form.reset();
    this.showInput = false;
    this.canShowSearchStudentButton = true;
    this.canShowNewStudentSearchButton = false;
    this.canShowCreateStudentButton = false;
  }

  public searchStudent(cpf: string): void {
    if (cpf) {
      this.canBlockUi = true;

      this.studentService.getById(Utils.noMaskCpf(cpf)).subscribe(student => {
        this.canBlockUi = false;
        this.showStudent(student);
      }, () => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.GetInfoError());
      });
    }
  }

  public onCpfNewValue(cpf: string): void {
    if (cpf.length === 11) {
      this.studentForm.cpf?.setValue(Utils.formatCpf(cpf));
    }
  }

  private showStudent(student: StudentDto): void {
    this.showInput = true;
    this.canShowSearchStudentButton = false;
    this.canShowCreateStudentButton = true;
    this.canShowNewStudentSearchButton = true;

    this.studentForm.name?.patchValue(student.name);
    this.studentForm.cpf?.patchValue(student.cpf);
    this.studentForm.email?.patchValue(student.email);
    this.studentForm.phone?.patchValue(student.phone);

    if (student.cpf === null && student.cpf === '' ) {
      this.studentForm.cpf?.disable();
    }
  }

  public newStudentSearch(): void {
    this.studentForm.form.reset();
    this.studentForm.form.enable();
    this.showInput = false;
    this.canShowSearchStudentButton = true;
    this.canShowNewStudentSearchButton = false;
    this.canShowCreateStudentButton = false;
  }
}
