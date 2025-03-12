export interface IDate {
  plan: IData[];
  fact: IData[];
  deviation: string[];
}

export interface IData {
  date: string;
  enableTime: string;
  disableTime: string;
  enabledTime: string;
}
