export interface IMenuItem<I = string> {
  label: string;
  id: I;
  icon?: any;
}

export interface ICheckedItem {
  id: string;
  label: string;
}
