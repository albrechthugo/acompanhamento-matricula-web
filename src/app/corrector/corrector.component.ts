import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CorrectedExamDto } from '../entities/grade/corrected-exam-dto';
import { GradeStatus } from '../entities/grade/status/grade-status-enum';
import { Topic } from '../entities/grade/topic/topic-enum';
import { Utils } from '../utils/utils';
import { CorrectorService } from './../services/corrector/corrector.service';
import { StudentService } from './../services/student/student.service';
import { MessageUtils } from './../utils/message-utils';
import { RatingCriteriaHelper } from './helpers/ rating-criteria';

@Component({
  selector: 'app-corrector',
  templateUrl: './corrector.component.html',
  styleUrls: ['./corrector.component.css']
})
export class CorrectorComponent implements OnInit {

  public get cpfInput(): AbstractControl {
    return this.form?.get('cpf') as AbstractControl;
  }

  public get nameInput(): AbstractControl {
    return this.form?.get('name') as AbstractControl;
  }

  public get temaObedecidoInput(): AbstractControl {
    return this.form?.get('temaObedecido') as AbstractControl;
  }

  public get numeroLinhasInput(): AbstractControl {
    return this.form?.get('numeroLinhas') as AbstractControl;
  }

  public get coesaoInput(): AbstractControl {
    return this.form?.get('coesao') as AbstractControl;
  }

  public get ortografiaInput(): AbstractControl {
    return this.form?.get('ortografia') as AbstractControl;
  }

  public get pontuacaoInput(): AbstractControl {
    return this.form?.get('pontuacao') as AbstractControl;
  }

  public get apresentaConclusaoInput(): AbstractControl {
    return this.form?.get('apresentaConclusao') as AbstractControl;
  }

  public get tituloAdequadoInput(): AbstractControl {
    return this.form?.get('tituloAdequado') as AbstractControl;
  }

  public get apresentaIntroducaoInput(): AbstractControl {
    return this.form?.get('apresentaIntroducao') as AbstractControl;
  }

  public get apresentaDesenvolvimentoInput(): AbstractControl {
    return this.form?.get('apresentaDesenvolvimento') as AbstractControl;
  }

  public get gradesSum(): number {
    return (
      this.apresentaConclusaoInput.value
      + this.coesaoInput.value
      + this.ortografiaInput.value
      + this.numeroLinhasInput.value
      + this.pontuacaoInput.value
      + this.apresentaDesenvolvimentoInput.value
      + this.apresentaIntroducaoInput.value
      + this.tituloAdequadoInput.value
      + this.temaObedecidoInput.value
      ) / 9;
  }

  public get correctionStatus(): GradeStatus {
    return this.gradesSum >= 7.0 ? GradeStatus.PASSED : GradeStatus.FAILED;
  }

  public criterias = RatingCriteriaHelper.criterias();
  public canBlockUi = false;

  public form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    temaObedecido: new FormControl(),
    tituloAdequado: new FormControl(),
    apresentaIntroducao: new FormControl(),
    apresentaDesenvolvimento: new FormControl(),
    apresentaConclusao: new FormControl(),
    numeroLinhas: new FormControl(),
    coesao: new FormControl(),
    ortografia: new FormControl(),
    pontuacao: new FormControl(),
  });

  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private messageService: MessageService,
              private correctorService: CorrectorService) { }

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.form = this.fb.group({
      name: [null],
      cpf: [null, Validators.required],
      temaObedecido: [null, Validators.required],
      tituloAdequado: [null, Validators.required],
      apresentaIntroducao: [null, Validators.required],
      apresentaDesenvolvimento: [null, Validators.required],
      apresentaConclusao: [null, Validators.required],
      numeroLinhas: [null, Validators.required],
      coesao: [null, Validators.required],
      ortografia: [null, Validators.required],
      pontuacao: [null, Validators.required],
      concluido: [null, Validators.required]
    });
    this.form.get('name')?.disable();
  }

  public onCpfNewValue(cpf: string): void {
    if (cpf.length === 11) {
      this.form.get('cpf')?.setValue(Utils.formatCpf(cpf));
    }
  }

  public getStudentInfo(cpf: string): void {
    if (this.form.get('cpf')?.valid) {
      this.canBlockUi = true;

      this.studentService.getById(Utils.noMaskCpf(cpf)).subscribe(student => {
        this.canBlockUi = false;
        this.form.get('cpf')?.setValue(student.cpf);
        this.form.get('cpf')?.disable();
        this.form.get('name')?.setValue(student.name);
      }, () => {
        this.messageService.add(MessageUtils.GetInfoError());
        this.canBlockUi = false;
      });
    }
  }

  public sendCorrection(): void {
    if (this.form?.valid) {
      this.canBlockUi = true;

      const correctedExam: CorrectedExamDto = {
        cpf: Utils.noMaskCpf(this.form.get('cpf')?.value),
        finish: this.form.get('concluido')?.value,
        gradeStatus: this.correctionStatus,
        examGrades: [
          { grade: this.apresentaConclusaoInput.value, topic: Topic.CONTAINS_CONCLUSION },
          { grade: this.coesaoInput.value, topic: Topic.COHESION },
          { grade: this.ortografiaInput.value, topic: Topic.ORTHOGRAPHY },
          { grade: this.numeroLinhasInput.value, topic: Topic.NUMBER_OF_LINES },
          { grade: this.pontuacaoInput.value, topic: Topic.PUNCTUATION },
          { grade: this.apresentaDesenvolvimentoInput.value, topic: Topic.CONTAINS_DEVELOPMENT },
          { grade: this.apresentaIntroducaoInput.value, topic: Topic.CONTAINS_INTRODUCTION },
          { grade: this.tituloAdequadoInput.value, topic: Topic.PROPER_TITLE },
          { grade: this.temaObedecidoInput.value, topic: Topic.THEME_OBEYED },
        ]
      };

      this.correctorService.sendCorrection(correctedExam).subscribe(() => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.GenericSuccess());
        this.form.reset();
      }, () => {
        this.canBlockUi = false;
        this.messageService.add(MessageUtils.GenericError());
      });
    }
  }
}
