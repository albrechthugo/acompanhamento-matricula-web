import { GradeStatus } from './../../../entities/grade/status/grade-status-enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradeStatus'
})
export class GradeStatusPipe implements PipeTransform {

  transform(value: GradeStatus): string {
    return value === GradeStatus.PASSED ? 'APROVADO' : 'REPROVADO';
  }

}
