import { Enumeration } from './../../entities/enumeration/enumeration';
export class RatingCriteriaHelper {

  public static criterias(): Enumeration[] {
    return [
      { label: 'Tema Obedecido', value: '' },
      { label: 'Título Adequado', value: '' },
      { label: 'Apresenta Introdução', value: '' },
      { label: 'Apresenta Desenvolvimento', value: '' },
      { label: 'Apresenta Conclusão', value: '' },
      { label: 'Respeito ao Número de Linhas', value: '' },
      { label: 'Coesão', value: '' },
      { label: 'Ortografia', value: '' },
      { label: 'Pontuação', value: '' }
    ];
  }
}
