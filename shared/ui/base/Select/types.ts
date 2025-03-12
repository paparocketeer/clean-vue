export interface IMenuItem<I = string> {
  label: string;
  id: I;
}

export interface ITitleMenuItem {
  model: string;
  number: string;
  id: number;
}
