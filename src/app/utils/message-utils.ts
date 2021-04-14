import { MessagesEnum } from '../entities/messages/messages-enum';
import { Message } from 'primeng/api';

export class MessageUtils {

  static EmployeeSuccessRegistration(): Message {
    return {
      severity: MessagesEnum.SUCCESS,
      summary: 'Sucesso!',
      detail: 'Funcionário cadastrado!'
    };
  }

  static EmployeeErrorRegistration(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha ao cadastrar funcionário'
    };
  }

  static EmployeeSuccessDelete(): Message {
    return {
      severity: MessagesEnum.SUCCESS,
      summary: 'Sucesso!',
      detail: 'Solicitação deletada!'
    };
  }

  static EmployeeErrorDelete(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha ao deletar solicitação'
    };
  }

  static EmployeeSuccessActive(): Message {
    return {
      severity: MessagesEnum.SUCCESS,
      summary: 'Sucesso!',
      detail: 'Funcionário ativado!'
    };
  }

  static EmployeeErrorActive(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha ao ativar funcionário'
    };
  }

  static SendExamToCorrectionSuccess(): Message {
    return {
      severity: MessagesEnum.SUCCESS,
      summary: 'Sucesso!',
      detail: 'Prova enviada com sucesso!'
    };
  }

  static SendExamToCorrectionError(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha ao enviar prova'
    };
  }

  static GetInfoError(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha ao buscar dados'
    };
  }
}
