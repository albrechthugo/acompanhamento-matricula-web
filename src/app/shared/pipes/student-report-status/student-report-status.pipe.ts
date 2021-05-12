import { Pipe, PipeTransform } from '@angular/core';
import { StudentStatusEnum } from '../../../entities/student/status/student-status-enum';

@Pipe({
  name: 'studentReportStatus'
})
export class StudentReportStatusPipe implements PipeTransform {

  transform(value: StudentStatusEnum): string {
    switch (value) {
      case StudentStatusEnum.CANCELED_REGISTRATION:
        return 'CANCELADO';
      case StudentStatusEnum.COMPLETED_REGISTRATION:
        return 'MATRICULADO';
      case StudentStatusEnum.PENDING_REGISTRATION:
        return 'PENDENTE';
      default:
        return '';
    }
  }

}
