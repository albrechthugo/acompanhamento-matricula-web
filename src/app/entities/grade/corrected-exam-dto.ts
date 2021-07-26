import { GradeStatus } from './status/grade-status-enum';
import { Grade } from './grade';

export interface CorrectedExamDto {
  cpf: string;
  examGrades: Grade[];
  finish: boolean;
  gradeStatus: GradeStatus;
}
