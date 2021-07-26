import { formatCPF } from '@brazilian-utils/brazilian-utils';

export class Utils {

  public readonly CPF_SIZE = 11;

  public static formatCpf(cpf: string): string {
    return formatCPF(cpf, { pad: true });
  }

  public static noMaskCpf(cpfWithMask: string): string {
    const noMaskCpfValue = cpfWithMask ? cpfWithMask.split('.').join('').split('-').join('') : '';
    return noMaskCpfValue;
  }
}
