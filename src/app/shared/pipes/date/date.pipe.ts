import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brazilianDate'
})
export class DatePipe implements PipeTransform {

  transform(value: Date): string {
    const isoStringValue = value.toISOString();
    return this.dateToDDMMYYYY(isoStringValue);
  }

  private dateToDDMMYYYY(date: string): string {
    const dataEmUtc = new Date(date);
    const dia = this.getDay(dataEmUtc.getDate() + 1);
    const month = dataEmUtc.getMonth() + 1;
    const mes = month < 10 ? '0' + month : month;
    const ano = dataEmUtc.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  private getDay(value: number): string | number {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value;
    }
  }
}
