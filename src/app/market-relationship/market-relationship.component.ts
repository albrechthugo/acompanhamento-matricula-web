import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../shared/validators/validators';
import { StudentDto } from './../entities/student/student-dto';
import { StudentService } from './../services/student/student.service';

@Component({
  selector: 'app-market-relationship',
  templateUrl: './market-relationship.component.html',
  styleUrls: ['./market-relationship.component.css']
})
export class MarketRelationshipComponent implements OnInit {

  get student(): StudentDto {
    return {
      name: this.form.get('name')?.value,
      cpf: this.form.get('cpf')?.value,
      email: this.form.get('email')?.value,
      phone: this.form.get('phone')?.value
    };
  }

  public form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    email: new FormControl(),
    phone: new FormControl()
  });

  public canShowCreateStudentButton = false;
  public canShowSearchStudentButton = true;
  public canShowNewStudentSearchButton = false;
  public showInput = false;

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit(): void {
    this.formBuilder();
  }

  private formBuilder(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      cpf: [null, [Validators.required, MyValidators.validateCpf]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required]
    });
  }

  public create(): void {
    if (this.form.valid) {
      this.studentService.create(this.student).subscribe(() => {
        console.log(this.student, 'Student created');
      });
    }
  }

  public searchStudent(cpf: string): void {
    if (cpf) {
      this.studentService.getById(cpf).subscribe(student => {
        this.showStudent(student);
      });
    }
  }

  private showStudent(student: StudentDto): void {
    this.showInput = true;
    this.canShowSearchStudentButton = false;
    this.canShowCreateStudentButton = true;
    this.canShowNewStudentSearchButton = true;

    this.form.get('name')?.patchValue(student.name);
    this.form.get('cpf')?.patchValue(student.cpf);
    this.form.get('email')?.patchValue(student.email);
    this.form.get('phone')?.patchValue(student.phone);

    if (student.cpf === null && student.cpf === '' ) {
      this.form.get('cpf')?.disable();
    }
  }

  public newStudentSearch(): void {
    this.form.reset();
    this.form.enable();
    this.showInput = false;
    this.canShowSearchStudentButton = true;
    this.canShowNewStudentSearchButton = false;
    this.canShowCreateStudentButton = false;
  }
}
