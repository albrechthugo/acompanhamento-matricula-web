import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { validateCpf } from '../shared/validators/validators';
import { StudentDto } from './../entities/student/student-dto';
import { StudentService } from './../services/student/student.service';

@Component({
  selector: 'app-market-relationship',
  templateUrl: './market-relationship.component.html',
  styleUrls: ['./market-relationship.component.css']
})
export class MarketRelationshipComponent implements OnInit {

  @ViewChild('createStudentButton', { static: false }) createStudentButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('searchStudentButton', { static: false }) searchStudentButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('newStudentSearchButton', { static: true }) newStudentSearchButton!: ElementRef<HTMLButtonElement>;

  get student(): StudentDto {
    return {
      name: this.form.get('name')?.value,
      cpf: this.form.get('cpf')?.value,
      email: this.form.get('email')?.value,
      phone: this.form.get('phone')?.value
    };
  }

  form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    email: new FormControl(),
    phone: new FormControl()
  });

  menuItems: MenuItem[] = [];
  showInput: boolean = false;

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit(): void {
    this.setItems();
    this.formBuilder();
    this.newStudentSearchButton.nativeElement.classList.add('hidden');
  }

  formBuilder(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      cpf: [null, [Validators.required, validateCpf]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required]
    });
  }

  setItems(): void {
    this.menuItems = [
      { label: 'RELAÇÃO MERCADO', icon: 'pi pi-file-o', routerLink: '/relacaoMercado' },
      { label: 'FINANCEIRO', icon: 'pi pi-file-o', routerLink: '/relacaoMercado' },
      { label: 'APOIO VESTIBULAR', icon: 'pi pi-file-o', routerLink: '/relacaoMercado' },
      { label: 'SECRETARIA', icon: 'pi pi-file-o', routerLink: '/relacaoMercado' },
      { label: 'CORRETOR', icon: 'pi pi-file-o', routerLink: '/relacaoMercado' },
      { label: 'CADASTRO', icon: 'pi pi-file-o', routerLink: '/relacaoMercado' },
      { label: 'RELATÓRIO', icon: 'pi pi-file-o', routerLink: '/relacaoMercado' }
    ];
  }

  create(): void {
    if (this.form.valid) {
      this.studentService.create(this.student).subscribe(() => {
        console.log(this.student, 'Student created');
      });
    }
  }

  searchStudent(cpf: string): void {
    if (cpf) {
      this.studentService.getById(cpf).subscribe(student => {
        this.showStudent(student);
      });
    }
  }

  showStudent(student: StudentDto): void {
    this.showInput = true;

    if (student.name === null && (student.phone === null && student.email === null)) {
      this.createStudentButton.nativeElement.classList.remove('hidden');
      this.searchStudentButton.nativeElement.classList.add('hidden');
      this.newStudentSearchButton.nativeElement.classList.add('hidden');
    } else {
      this.searchStudentButton.nativeElement.classList.add('hidden');
      this.newStudentSearchButton.nativeElement.classList.remove('hidden');
      this.form.get('name')?.patchValue(student.name);
      this.form.get('cpf')?.patchValue(student.cpf);
      this.form.get('email')?.patchValue(student.email);
      this.form.get('phone')?.patchValue(student.phone);
      this.form.disable();
    }
  }

  newStudentSearch(): void {
    this.form.reset();
    this.form.enable();
    this.showInput = false;
    this.searchStudentButton.nativeElement.classList.remove('hidden');
    this.newStudentSearchButton.nativeElement.classList.add('hidden');
  }
}
