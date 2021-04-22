import { Grade } from './../grade/grade';

export interface ExamDto {
  grades: Grade[];
  url: string;
}
