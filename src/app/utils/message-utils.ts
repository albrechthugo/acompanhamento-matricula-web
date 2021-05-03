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

  public static RegistrationRequestError(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha na solicitação de cadastro'
    };
  }

  public static RegistrationRequestSuccess(): Message {
    return {
      severity: MessagesEnum.SUCCESS,
      summary: 'Sucesso!',
      detail: 'Solicitação de cadastro enviada!'
    };
  }

  public static StudentRegistrationSuccess(): Message {
    return {
      severity: MessagesEnum.SUCCESS,
      summary: 'Sucesso!',
      detail: 'Estudante criado!'
    };
  }

  public static StudentRegistrationError(): Message {
    return {
      severity: MessagesEnum.ERROR,
      summary: 'Erro!',
      detail: 'Falha ao criar estudante'
    };
  }
}
