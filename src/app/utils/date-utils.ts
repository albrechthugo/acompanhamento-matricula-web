export class DateUtils {

  public static getOneMonthBack(nowDate: Date): Date {
    const oneMonthBackDate = nowDate;
    oneMonthBackDate.setDate(oneMonthBackDate.getDate() - 30);
    return oneMonthBackDate;
  }
}
