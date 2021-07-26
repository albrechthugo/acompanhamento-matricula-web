export class DateUtils {

  public static getOneMonthBack(): Date {
    const nowDate = new Date();
    const initialDate = new Date().setDate(nowDate.getDate() - 30);
    return new Date(initialDate);
  }
}
