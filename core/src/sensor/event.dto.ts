export class EventDto {
  name: string;
  value: number;
  date: Date;

  constructor(name: string, value: number, date: Date) {
    this.name = name;
    this.value = value;
    this.date = date;
  }
}
