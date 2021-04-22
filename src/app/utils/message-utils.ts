import { MessagesEnum } from '../entities/messages/messages-enum';
import { Message } from 'primeng/api';

export class MessageUtils {

  public static EmployeeSuccessRegistration(): Message {
    return {
      severity: MessagesEnum.SUCCESS,
      summary: 'Sucesso!',
      detail: 'Funcionário cadastrado!'
    };
  }

  public static EmployeeErrorRegistration(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha ao cadastrar funcionário'
    };
  }

  public static EmployeeSuccessDelete(): Message {
    return {
      severity: MessagesEnum.SUCCESS,
      summary: 'Sucesso!',
      detail: 'Solicitação deletada!'
    };
  }

  public static EmployeeErrorDelete(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha ao deletar solicitação'
    };
  }

  public static EmployeeSuccessActive(): Message {
    return {
      severity: MessagesEnum.SUCCESS,
      summary: 'Sucesso!',
      detail: 'Funcionário ativado!'
    };
  }

  public static EmployeeErrorActive(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha ao ativar funcionário'
    };
  }

  public static SendExamToCorrectionSuccess(): Message {
    return {
      severity: MessagesEnum.SUCCESS,
      summary: 'Sucesso!',
      detail: 'Prova enviada com sucesso!'
    };
  }

  public static SendExamToCorrectionError(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha ao enviar prova'
    };
  }

  public static GetInfoError(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha ao buscar dados'
    };
  }
}
